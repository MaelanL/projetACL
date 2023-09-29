<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AddCardsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('cards')->insert([
            // Insertion des coeurs.
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '6',
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '5',
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '4',
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '3',
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '2',
            ],

            // Insertion des carreaux.
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '6',
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '5',
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '4',
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '3',
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '2',
            ],
            // Insertion des pics.
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '6',
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '5',
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '4',
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '3',
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '2',
            ],
            // Insertion des trêfles.
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '6',
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '5',
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '4',
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '3',
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '2',
            ],
        ]);
    }
}
