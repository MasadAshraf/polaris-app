import React from 'react';
import {Page, Heading, Card} from '@shopify/polaris';
import { CopyBlock } from "react-code-blocks";

function Instruction() {
    return (

        <Page>
            <Heading element="h1">Install Instructions</Heading>
            <Card title='Copy and Paste code to Additional Scripts.'>
                <p>Copy the below code and paste it into the <b>Settings > Checkout > Additional scripts section.</b></p>
                    <CopyBlock
                        text={ '<script src="https://code.jquery.com/jquery-3.5.1.js"></script>\n' +
                        '<script>\n' +
                        '  if (window.location.pathname.indexOf(\'/checkouts\') !== -1 && window.location.pathname.indexOf(\'/thank_you\') !== -1) {\n' +
                        '    function savyourScript(js_code) {\n' +
                        '      var script = document.createElement(\'script\');\n' +
                        '      script.type = \'text/javascript\';\n' +
                        '      script.innerHTML = js_code;\n' +
                        '      document.getElementsByTagName(\'head\')[0].appendChild(script);\n' +
                        '    }\n' +
                        '\n' +
                        '    var products = {}\n' +
                        '      {% for line_item in checkout.line_items %}\n' +
                        '        var pcollections = []\n' +
                        '         {% for collection in line_item.product.collections %}\n' +
                        '            pcollections.push("{{ collection.title }}");\n' +
                        '         {% endfor %}\n' +
                        '         products[{{line_item.product.id}}] = pcollections.join();\n' +
                        '      {% endfor %}\n' +
                        '\n' +
                        '    savyourScript("!function () {\'savyour\' in window || (window.savyour = function () { window.savyour.q.push(arguments)}, window.savyour.q = []); var e = (new Date).getTime();const n = document.createElement(\'script\');n.src = \'https://affiliate.savyour.com.pk/sap.min.js?v=\' + e, n.async = !0, n.defer = !0;const t = document.getElementsByTagName(\'script\')[0];t.parentNode.insertBefore(n, t)}();");\n' +
                        '    var cart_items = [];\n' +
                        '    var line_items = Shopify.checkout.line_items;\n' +
                        '    jQuery.each(line_items, function( index, value ) {\n' +
                        '      var cart_item = {\n' +
                        '        "category_name": products[value[\'product_id\']],\n' +
                        '        "product_amount": parseFloat(value[\'price\']),\n' +
                        '        "product_quantity": value[\'quantity\'],\n' +
                        '        "product_id": value[\'product_id\'],\n' +
                        '        "product_name" : value[\'title\']\n' +
                        '      }\n' +
                        '      cart_items.push(cart_item);\n' +
                        '    });\n' +
                        '    savyour(\'init\',\''+window.auth_key+'\');\n' +
                        '\n' +
                        '    savyour(\'orderPlace\',{\n' +
                        '          "order_id" : Shopify.checkout.order_id,\n' +
                        '          "invoice_id": "{{ order.order_number }}",\n' +
                        '          "delivery_amount": Shopify.checkout.shipping_price,\n' +
                        '          "tax_amount": parseFloat(Shopify.checkout.total_tax),\n' +
                        '          "discount_amount": Shopify.checkout.discounts_amount,\n' +
                        '          "payment_option": "{{ order.gateway }}",\n' +
                        '          "cart_total" : parseFloat(Shopify.checkout.subtotal_price),\n' +
                        '          "cart_items" : cart_items,\n' +
                        '     });\n' +
                        '  }\n' +
                        '</script>'}
                        language={'javascript'}
                        showLineNumbers={false}
                        theme={'Atom One Dark'}
                    />
            </Card>
        </Page>

    );
}

export default Instruction
