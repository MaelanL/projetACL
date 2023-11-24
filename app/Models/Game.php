<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;


/**
 * Classe représentant un jeu de l'application.
 *
 * @property int $id - Identifiant du jeu.
 * @property string $name - Nom du jeu.
 * @property string $description - Description du jeu.
 *
 */
class Game extends Model
{
    use HasFactory;

    protected $table = "games";
    protected $primaryKey = "id";
    public $incrementing = false;
    protected $keyType = "integer";
    public $timestamps = false;

	public function belote_challenge_game(): HasOne
	{
		return $this->hasOne(BeloteChallengeGame::class);
	}

}
