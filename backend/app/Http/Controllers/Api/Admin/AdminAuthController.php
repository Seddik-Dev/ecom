<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
            'remember' => ['sometimes', 'boolean'],
        ]);

        if (! Auth::guard('admin')->attempt(
            $request->only('email', 'password'),
            $request->boolean('remember')
        )) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }

        $request->session()->regenerate();

        $admin = Auth::guard('admin')->user();

        return response()->json([
            'message' => 'Connected',
            'admin' => $admin->only(['id', 'name', 'email']),
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }

    public function user(Request $request)
    {
        return response()->json([
            'admin' => $request->user('admin')->only(['id', 'name', 'email']),
        ]);
    }
}
