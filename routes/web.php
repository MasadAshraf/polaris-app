<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',function (){
    return redirect()->route('app.home');
})->middleware(['verify.shopify'])->name('home');


Route::get('app/{path?}', function () {
    return view('app');
})->middleware(['verify.shopify'])->name('app.home');

