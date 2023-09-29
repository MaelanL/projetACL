<?php

namespace Database\Seeders;

use App\Models\CardsGamesLink;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CardsGamesLinksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i < 33; $i++)
        {
            CardsGamesLink::create([
                'card_id' => $i,
                'game_id' => 1,
            ]);
        }
    }
}
