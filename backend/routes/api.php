<?php

use App\Http\Controllers\Api\Admin\AdminAuthController;
use App\Http\Controllers\Api\Admin\Categorycontroller;
use App\Http\Controllers\Api\Admin\ProductController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;



// =============================== Public Routes ==========================================
Route::get('/categories', [Categorycontroller::class, 'index']);
Route::get('/getAllCategories', [Categorycontroller::class, 'getAllCategories']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/latest-products', [ProductController::class, 'getLatestProducts']);




// =============================== Admin ==========================================
Route::post('/admin/login', [AdminAuthController::class, 'login'])
    ->middleware('throttle:6,1');

Route::prefix('admin')->middleware('auth:admin')->group(function () {
    Route::get('/user', [AdminAuthController::class, 'user']);
    Route::post('/logout', [AdminAuthController::class, 'logout']);
    Route::post('/categories', [Categorycontroller::class, 'store']);
    Route::post('/products', [ProductController::class, 'store']);
});




// =============================== User ==========================================
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth:sanctum');
Route::get('/users', [AuthController::class, 'users'])
    ->middleware('auth:sanctum');
