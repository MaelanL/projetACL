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
        Schema::table('games', function (Blueprint $table) {
            $table->addColumn("boolean","display")->default(true);
        });

			\DB::table('games')
				->where("name","=","solitaire")
				->update(
					[
						"display" => false,
					]);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('games', function (Blueprint $table) {
            $table->removeColumn("display");
        });
    }
};
