<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function getLatestProducts()
    {
        $products = Product::with('category:id,name')
            ->latest()
            ->take(8)
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Latest products fetched successfully',
            'data' => $products,
        ]);
    }
    
    public function index()
    {
        $products = Product::with('category:id,name')
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Products fetched successfully',
            'data' => $products,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'price' => ['required', 'string', 'max:255'],
            'image' => ['required', 'image', 'max:2048'],
            'category_id' => ['required', 'exists:categories,id'],
            'stock' => ['required', 'string', 'max:255'],
            'inStock' => ['nullable', 'integer', 'in:0,1'],
            'status' => ['nullable', 'in:active,inactive'],
        ]);

        $imagePath = $request->file('image')->store('products', 'public');

        $product = Product::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'price' => $validated['price'],
            'image' => url(Storage::url($imagePath)),
            'category_id' => $validated['category_id'],
            'stock' => $validated['stock'],
            'inStock' => $validated['inStock'] ?? 0,
            'status' => $validated['status'] ?? 'active',
        ]);

        $product->load('category:id,name');

        return response()->json([
            'success' => true,
            'message' => 'Product created successfully',
            'data' => $product,
        ], 201);
    }

    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
