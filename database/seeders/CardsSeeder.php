<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CardsSeeder extends Seeder
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
                'value' => 'king',
                'points' => '4'
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => 'queen',
                'points' => '3'
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => 'jack',
                'points' => '2'
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => 'ace',
                'points' => '11'
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '10',
                'points' => '10'
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '9',
                'points' => '0'
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '8',
                'points' => '0'
            ],
            [
                'color' => 'red',
                'type' => 'hearts',
                'value' => '7',
                'points' => '0'
            ],

            // Insertion des carreaux.
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => 'king',
                'points' => '4'
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => 'queen',
                'points' => '3'
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => 'jack',
                'points' => '2'
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => 'ace',
                'points' => '11'
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '10',
                'points' => '10'
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '9',
                'points' => '0'
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '8',
                'points' => '0'
            ],
            [
                'color' => 'red',
                'type' => 'diamonds',
                'value' => '7',
                'points' => '0'
            ],


            // Insertion des pics.
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => 'king',
                'points' => '4'
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => 'queen',
                'points' => '3'
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => 'jack',
                'points' => '2'
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => 'ace',
                'points' => '11'
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '10',
                'points' => '10'
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '9',
                'points' => '0'
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '8',
                'points' => '0'
            ],
            [
                'color' => 'black',
                'type' => 'spades',
                'value' => '7',
                'points' => '0'
            ],

            // Insertion des trêfles.
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => 'king',
                'points' => '4'
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => 'queen',
                'points' => '3'
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => 'jack',
                'points' => '2'
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => 'ace',
                'points' => '11'
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '10',
                'points' => '10'
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '9',
                'points' => '0'
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '8',
                'points' => '0'
            ],
            [
                'color' => 'black',
                'type' => 'clubs',
                'value' => '7',
                'points' => '0'
            ],


        ]);
    }
}
