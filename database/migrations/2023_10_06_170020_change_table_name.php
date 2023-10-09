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
			Schema::rename("belote_challenge_histories", "belote_challenge_games");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
			Schema::rename("belote_challenge_games","belote_challenge_histories");
		}
};
