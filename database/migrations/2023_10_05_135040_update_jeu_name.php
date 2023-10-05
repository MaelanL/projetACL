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
			\DB::table('games')
				->where("name","=","Jeu")
				->update(
					[
						"name" => "Belote Challenge",
					]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
			\DB::table('games')
				->where("name","=","Belote Challenge")
				->update(
					[
						"name" => "Jeu",
					]);
    }
};
