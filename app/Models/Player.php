<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Classe représentant un joueur.
 *
 * @property int $id - Identifiant du joueur.
 * @property string $pseudo - Pseudo du joueur.
 */

class Player extends Model
{
	use HasFactory;

	protected $table = "players";
	protected $primaryKey = "id";
	public $incrementing = true;
	protected $keyType = "integer";
	public $timestamps = false;

  public function belote_challenge_game(): \Illuminate\Database\Eloquent\Relations\HasMany
	{
      return $this->hasMany(BeloteChallengeGame::class);
  }



}
