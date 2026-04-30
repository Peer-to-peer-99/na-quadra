<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sport;

class SportSeeder extends Seeder
{
    private $sports = [
        [
            'name' => 'Beach Tennis',
            'slug' => 'beach_tennis'
        ],
        [
            'name' => 'Futebol Society',
            'slug' => 'futebol-society'
        ],
        [
            'name' => 'Futebol 7',
            'slug' => 'futebol_7'
        ],
        [
            'name' => 'Basquete',
            'slug' => 'basquete'
        ],
        [
            'name' => 'Vôlei',
            'slug' => 'volei'
        ],
        [
            'name' => 'Padel',
            'slug' => 'padel'
        ],
        [
            'name' => 'Tênis',
            'slug' => 'tenis'
        ]
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach($this->sports as $sportToCreate){
            $sport = Sport::updateOrCreate([
                'name' => $sportToCreate['name'],
                'slug' => $sportToCreate['slug']
            ]);
        }
    }
}
