<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UpdateCardsTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('cards')
            ->where("type","=","diamonds")
            ->update(
            [
                "type" => "diamond",
        ]);

        \DB::table('cards')
            ->where("type","=","clubs")
            ->update(
            [
                "type" => "club",
        ]);

        \DB::table('cards')
            ->where("type","=","spades")
            ->update(
            [
                "type" => "spade",
        ]);

        \DB::table('cards')
            ->where("type","=","hearts")
            ->update(
            [
                "type" => "heart",
        ]);
    }
}
