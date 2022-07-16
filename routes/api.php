<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Fruit\FruitController;
use App\Http\Controllers\GetController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\PostController;
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


//Route::get('/', [\App\Http\Controllers\MainController::class, 'index']);

Route::group(['prefix' => 'post'], function(){
    Route::get('/all', [PostController::class, 'index']);
    Route::post('/', [PostController::class, 'store']);
    Route::get('/{post}', [PostController::class, 'show']);

    Route::group(['prefix' => 'images'], function(){
       Route::post('/', [ImageController::class, 'store']);
    });
});

/*
Route::group(['middleware' => 'auth:sanctum'], function(){
   Route::get('/get', [GetController::class, 'index']);
});

//Route::get('/get', [GetController::class, 'index']);
*/
