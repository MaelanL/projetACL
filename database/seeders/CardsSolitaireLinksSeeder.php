<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CardsGamesLink;


class CardsSolitaireLinksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i < 53; $i++)
        {
            CardsGamesLink::create([
                'card_id' => $i,
                'game_id' => 2,
            ]);
        }
    }
}
