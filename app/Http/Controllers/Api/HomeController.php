<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function createAuth(Request $request): \Illuminate\Http\JsonResponse
    {
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

    }
}
