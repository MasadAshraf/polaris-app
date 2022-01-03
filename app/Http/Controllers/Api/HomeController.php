<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Client\HttpClientException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function setAuthKey(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request->validate([
                'key' => 'required|max:255',
            ]);
            $user = Auth::user();
            $user->auth_key = $request->key;
            $user->save();

            return response()->json([
                'code' => 200,
                'message' => 'success',

            ]);
        } catch (\Exception $e) {
            throw new HttpClientException($e->getMessage());
        }


    }
}
