<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\FileUpload;
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
Route::get('/upload-file', [FileUpload::class, 'createForm']);

Route::post('/upload-file', [FileUpload::class, 'fileUpload'])->name('fileUpload');
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
