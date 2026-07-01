<?php

use App\Http\Controllers\Api\Admin\AdminAuthController;
use App\Http\Controllers\Api\AuthController;

use Illuminate\Support\Facades\Route;
// =============================== Admin ==========================================
Route::post('/admin/login', [AdminAuthController::class, 'login'])
    ->middleware('throttle:6,1');

Route::prefix('admin')->middleware('auth:admin')->group(function () {
    Route::get('/user', [AdminAuthController::class, 'user']);
    Route::post('/logout', [AdminAuthController::class, 'logout']);
});


// =============================== End Admin ==========================================


// =============================== User ==========================================
Route::post('/login', [AuthController::class,'login']);
Route::post('/register', [AuthController::class,'register']);
Route::post('/logout', [AuthController::class,'logout'])
    ->middleware('auth:sanctum');
Route::get('/users', [AuthController::class,'users'])
    ->middleware('auth:sanctum');