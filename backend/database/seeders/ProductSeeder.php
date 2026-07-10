<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'HP Pavilion 15',
                'description' => 'Ordinateur portable HP Pavilion 15 Intel Core i5 16GB RAM 512GB SSD.',
                'price' => 8999.00,
                'image' => 'products/hp-pavilion.jpg',
                'category_id' => 1,
                'stock' => 15,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Lenovo ThinkPad E14',
                'description' => 'Laptop professionnel Lenovo ThinkPad E14 Ryzen 7.',
                'price' => 10999.00,
                'image' => 'products/thinkpad-e14.jpg',
                'category_id' => 1,
                'stock' => 8,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'iPhone 16 Pro',
                'description' => 'Apple iPhone 16 Pro 256Go.',
                'price' => 16999.00,
                'image' => 'products/iphone16pro.jpg',
                'category_id' => 3,
                'stock' => 20,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Samsung Galaxy S25 Ultra',
                'description' => 'Samsung Galaxy S25 Ultra 512Go.',
                'price' => 15999.00,
                'image' => 'products/s25-ultra.jpg',
                'category_id' => 3,
                'stock' => 12,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Dell 27" Monitor',
                'description' => 'Écran Dell IPS Full HD 27 pouces.',
                'price' => 2499.00,
                'image' => 'products/dell-monitor.jpg',
                'category_id' => 5,
                'stock' => 18,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Logitech G Pro X',
                'description' => 'Clavier mécanique gaming Logitech.',
                'price' => 1499.00,
                'image' => 'products/logitech-keyboard.jpg',
                'category_id' => 6,
                'stock' => 30,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Logitech G502 Hero',
                'description' => 'Souris gaming Logitech G502 Hero.',
                'price' => 699.00,
                'image' => 'products/logitech-g502.jpg',
                'category_id' => 7,
                'stock' => 25,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'JBL Tune 770NC',
                'description' => 'Casque Bluetooth JBL avec réduction de bruit.',
                'price' => 1299.00,
                'image' => 'products/jbl770.jpg',
                'category_id' => 8,
                'stock' => 16,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Epson EcoTank L3250',
                'description' => 'Imprimante multifonction Wi-Fi.',
                'price' => 2299.00,
                'image' => 'products/epson-l3250.jpg',
                'category_id' => 9,
                'stock' => 10,
                'inStock' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Hub USB-C 7 en 1',
                'description' => 'Hub USB-C avec HDMI, USB 3.0 et lecteur SD.',
                'price' => 499.00,
                'image' => 'products/hub-usbc.jpg',
                'category_id' => 10,
                'stock' => 40,
                'inStock' => 1,
                'status' => 'active',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
