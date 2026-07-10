<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'name' => 'Ordinateurs Portables',
                'slug' => 'ordinateurs-portables',
                'description' => 'PC portables pour le travail, les études et le gaming.',
                'image' => 'categories/laptops.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ordinateurs de Bureau',
                'slug' => 'ordinateurs-de-bureau',
                'description' => 'PC de bureau pour professionnels et particuliers.',
                'image' => 'categories/desktops.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Smartphones',
                'slug' => 'smartphones',
                'description' => 'Les derniers smartphones Android et iPhone.',
                'image' => 'categories/smartphones.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tablettes',
                'slug' => 'tablettes',
                'description' => 'Tablettes Android et iPad.',
                'image' => 'categories/tablets.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Écrans',
                'slug' => 'ecrans',
                'description' => 'Moniteurs Full HD, 2K et 4K.',
                'image' => 'categories/monitors.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Claviers',
                'slug' => 'claviers',
                'description' => 'Claviers mécaniques et bureautiques.',
                'image' => 'categories/keyboards.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Souris',
                'slug' => 'souris',
                'description' => 'Souris gaming et professionnelles.',
                'image' => 'categories/mice.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Casques Audio',
                'slug' => 'casques-audio',
                'description' => 'Casques Bluetooth, gaming et filaires.',
                'image' => 'categories/headphones.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Imprimantes',
                'slug' => 'imprimantes',
                'description' => 'Imprimantes laser, jet d’encre et thermiques.',
                'image' => 'categories/printers.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Accessoires',
                'slug' => 'accessoires',
                'description' => 'Câbles, adaptateurs, hubs USB et accessoires divers.',
                'image' => 'categories/accessories.jpg',
                'status' => 'active',
                'created_by' => 1,
                'updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
