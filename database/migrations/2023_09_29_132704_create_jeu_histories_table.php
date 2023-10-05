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
        Schema::create('jeu_histories', function (Blueprint $table) {
            $table->id();
            $table->timestamp("played_at");
            $table->integer("score");
            $table->boolean("finished");

            $table->unsignedBigInteger("player_id");
            $table->unsignedBigInteger("game_id");


            $table->foreign("player_id")
                ->references("id")->on("player");

            $table->foreign("game_id")
                ->references("id")->on("games");

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jeu_histories');
    }
};
