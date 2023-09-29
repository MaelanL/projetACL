<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AddSolitaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('games')->insert([
            [
                "name" => "solitaire",
                "description" => "Le but du solitaire est de former 4 piles de cartes (chaque pile comprenant les cartes d'un même symbole) classées dans l'ordre croissant : As, 2, 3, 4, 5, 6, 7, 8, 9, 10, Valet, Dame, Roi.",
            ]
        ]);
    }
}
