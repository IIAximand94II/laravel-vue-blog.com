<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Fruit\FruitController;
use App\Http\Controllers\GetController;
use App\Http\Controllers\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'post'], function(){
   //Route::post('/store', [AuthController\])
});
/*
Route::group(['middleware' => 'auth:sanctum'], function(){
   Route::get('/get', [GetController::class, 'index']);
});

//Route::get('/get', [GetController::class, 'index']);
*/
