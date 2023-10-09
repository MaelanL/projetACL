<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
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

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
			\DB::table('cards')
				->where("type","=","diamond")
				->update(
					[
						"type" => "diamonds",
					]);

			\DB::table('cards')
				->where("type","=","club")
				->update(
					[
						"type" => "clubs",
					]);

			\DB::table('cards')
				->where("type","=","spade")
				->update(
					[
						"type" => "spades",
					]);

			\DB::table('cards')
				->where("type","=","heart")
				->update(
					[
						"type" => "hearts",
					]);
    }
};
