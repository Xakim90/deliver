<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FileUpload;
use App\Models\Product;
use App\Models\User;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Route::get('users/profile',[UserProfileController::class, 'show'])->name('profile');
Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);
Route::post('me', [PassportAuthController::class, 'me']);

Route::get('books', [BookController::class, 'index']);
Route::get('books/{id}', [BookController::class, 'show']);
Route::post('books',[BookController::class, 'store']);
Route::put('books/{id}',[BookController::class, 'update']);
Route::delete('books/{id}', [BookController::class, 'delete']);
Route::get('product', [ProductController::class, 'index']);
Route::get('product/{id}', [ProductController::class, 'show']);
//Route::get('products/{name}', [ProductController::class, 'get']);
Route::post('product',[ProductController::class, 'store']);
Route::put('product/{id}',[ProductController::class, 'update']);
Route::delete('product/{id}', [ProductController::class, 'delete']);
Route::get('/upload-file', [FileUpload::class, 'createForm']);

Route::post('/upload-file', [FileUpload::class, 'fileUpload'])->name('fileUpload');
Route::get('user/{name?}', function($name = null)
{
    $name = Product::where('name', $request->name)->get();
		// $name = $request->query('name');
		//var_dump($name);
		//return response()->json($name);
    return $name;
});
// Route::get('/users/{id}', function ($id) {
//     return 'User '.$id;
// });
// Route::get('/posts/{post}/comments/{comment}', function ($postId, $commentId) {
//     return "Post ".$postId." ".$commentId;
// });
// Route::get('/users/{name?}', function ($name = null) {
//     return $name;
// });
//Route::redirect('/here', '/there', 301);
// Route::get('/user/{id}', function ($id) {
//     return 'User '.$id;
// })->where('id', '[0-9]+');
