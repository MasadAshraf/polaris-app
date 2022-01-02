<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SavyourShopsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return JsonResponse
     */
    public function handle(Request $request, Closure $next)
    {

        if (!$request->hasHeader('Auth-Key')) {
            return response()->json([]);
        }
        $shop = User::where('auth_key', $request->header('Auth-Key'))->first();
        if ($shop) {
            Auth::loginUsingId($shop->id);
            return $next($request);
        } else {
            return response()->json([]);
        }

    }
}
