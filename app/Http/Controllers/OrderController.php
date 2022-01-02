<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Osiset\BasicShopifyAPI\BasicShopifyAPI;
use Osiset\BasicShopifyAPI\Options;
use Osiset\BasicShopifyAPI\Session;

class OrderController extends Controller
{
    private BasicShopifyAPI $api;
    private Options $options;

    public function __construct()
    {
        $this->options = new Options();
        $this->options->setVersion(env('SHOPIFY_API_VERSION'));
        $this->options->setApiKey(env('SHOPIFY_API_KEY'));
        $this->options->setApiSecret(env('SHOPIFY_API_SECRET'));


    }

    public function index(Request $request)
    {

        $res = [];
        if (!empty($request->order_ids)) {
            $orderIds = $request->order_ids;
            $user = Auth::user();
            $this->api = new BasicShopifyAPI($this->options);
            $this->api->setSession(new Session($user->name, $user->password));
            $counter = 0;
            foreach ($orderIds as $id) {
                $order = $this->api->rest('GET', "/admin/orders/$id.json");
                if ($order['body'] == "Not Found") {
                    continue;
                }
                $res[$counter] = $this->orderFormatter($order['body']['order']->toArray());

                $counter++;
            }
        }
        return response()->json($res);
    }

    private function orderFormatter(array $order)
    {

        if (isset($order['cancelled_at'])) {
            $status = 'cancelled';
        } elseif ($order['financial_status'] == 'paid') {
            $status = 'paid';
        } elseif ($order['fulfillment_status'] == 'fulfilled') {
            $status = 'fulfilled';
        } else {
            $status = 'pending';
        }
        $cartItems = [];
        foreach ($order['line_items'] as $lineItem) {
            $collection = [];
            $smartCollection =  $this->api->rest('GET', "/admin/smart_collections.json",['query' => "fields=title&product_id={$lineItem['product_id']}" ]);
            $customCollection =  $this->api->rest('GET', "/admin/custom_collections.json", ['query' => "fields=title&product_id={$lineItem['product_id']}" ]);
            if(isset($smartCollection['body']['smart_collections'])){
                $smartCollection = $smartCollection['body']['smart_collections']->toArray();
                foreach ($smartCollection as $value){
                    array_push($collection,$value['title']);
                }
            }
            if ( isset($customCollection['body']['custom_collections'])){
                $customCollection = $customCollection['body']['custom_collections']->toArray();
                foreach ($customCollection as $value){
                    array_push($collection,$value['title']);
                }
            }

            $cartItems[] = [
                "category_name" => implode(',',$collection),
                "product_amount" => $lineItem['price'],
                "product_quantity" => $lineItem['quantity'],
                "product_id" => $lineItem['product_id'],
                "product_name" => $lineItem['title']
            ];
        }
        $shippingAmount = 0;
#        dd($order['shipping_lines']);
        if (count($order['shipping_lines']) > 0) {
            foreach ($order['shipping_lines'] as $shippingLine) {
                $shippingAmount = $shippingAmount + $shippingLine['price'];
            }
        }


        return [
            'order_id' => $order['id'],
            'status' => $status,
            'cart_total' => (float)$order['subtotal_price'] + (float)$order['total_tax'],
            'cart_itmes' => $cartItems,
            'invoice_id' => $order['number'],
            'delivery_amount' => $shippingAmount,
            'tax_amount' => (float)$order['total_tax'],
            'gross_amount' => (float)$order['subtotal_price'],
            'discount_code' => implode(',', array_map(function ($entry) {
                return $entry['code'];
            }, $order['discount_codes'])),
            'discount_amount' => (float)$order['total_discounts'],
            'payment_option' => $order['gateway']
        ];
    }
}
