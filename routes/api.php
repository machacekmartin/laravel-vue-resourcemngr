<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\EditorController;

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

Route::get('/links', [VisitorController::class, 'getLinks']);
Route::get('/codes', [VisitorController::class, 'getCodes']);
Route::get('/files', [VisitorController::class, 'getFiles']);

Route::post('/links', [EditorController::class, 'createLink']);
Route::patch('/links/{id}', [EditorController::class, 'editLink']);
Route::delete('/links/{id}', [EditorController::class, 'deleteLink']);

Route::post('/codes', [EditorController::class, 'createCode']);
Route::patch('/codes/{id}', [EditorController::class, 'editCode']);
Route::delete('/codes/{id}', [EditorController::class, 'deleteCode']);

Route::post('/files', [EditorController::class, 'createFile']);
Route::patch('/files/{id}', [EditorController::class, 'editFile']);
Route::delete('/files/{id}', [EditorController::class, 'deleteFile']);