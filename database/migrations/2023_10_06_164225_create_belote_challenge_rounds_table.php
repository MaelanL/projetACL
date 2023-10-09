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
        Schema::create('belote_challenge_rounds', function (Blueprint $table) {
					$table->id();

					$table->integer("round");
					$table->integer("score");
					$table->unsignedBigInteger("belote_challenge_id");
					$table->unsignedBigInteger("card_1_id");
					$table->unsignedBigInteger("card_2_id");

					$table->foreign("belote_challenge_id")
						->references("id")->on("belote_challenge_histories");

					$table->foreign("card_1_id")
						->references("id")->on("cards");

					$table->foreign("card_2_id")
						->references("id")->on("cards");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('belote_challenge_rounds');
    }
};
