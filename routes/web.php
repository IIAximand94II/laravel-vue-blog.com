<?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::get('{page}', [MainController::class, 'index'])->where('page', '.*');


//Route::get('/admin/{page}', [\App\Http\Controllers\Admin\MainController::class, 'index'])->where('page', '.*');

