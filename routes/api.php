<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookmarksController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\Fruit\FruitController;
use App\Http\Controllers\GetController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
//use App\Http\Controllers\User\UserController;
use App\Http\Controllers\UserController;
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

    Route::group(['prefix' => '{post}/comment'], function(){
        Route::get('/', [CommentController::class, 'index']);
        Route::post('/', [CommentController::class, 'store']);
    });

    Route::group(['prefix'=>'{post}/bookmarks'], function(){
        Route::post('/', [BookmarksController::class, 'store']);
    });
});

Route::group(['prefix' => 'tag'], function(){
    Route::get('/all', [TagController::class, 'all']);
    Route::get('/{tag}', [PostController::class, 'tag']);
});

Route::group(['prefix' => 'category'], function(){
    Route::get('/all', [CategoryController::class, 'all']);
    Route::get('/{category}', [PostController::class, 'category']);
});

Route::group(['prefix' => 'user'], function(){
    Route::get('/posts', [UserController::class, 'posts']);
    Route::get('/bookmarks', [UserController::class, 'bookmarks']);
    Route::get('/comments', [UserController::class, 'comments']);
});

/*
Route::group(['middleware' => 'auth:sanctum'], function(){
   Route::get('/get', [GetController::class, 'index']);
});

//Route::get('/get', [GetController::class, 'index']);
*/
