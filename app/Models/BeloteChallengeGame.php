<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Classe représentant l'historique de jeu.
 *
 * @property int $id - Identifiant de l'historique.
 * @property timestamp $played_at - Date de la partie.
 * @property int $score - BeloteChallengeScore de la partie.
 * @property boolean $finished - Indique si la partie à été abandonnée ou non.
 * @property int $player_id - Identifiant du joueur.
 * @property int $game_id - Identifiant du jeu.
 *
 * @property BeloteChallengeRound[] $rounds;
 *
 */

class BeloteChallengeGame extends Model
{
	use HasFactory;

	protected $table = "belote_challenge_games";
	protected $primaryKey = "id";
	public $incrementing = true;
	protected $keyType = "integer";
	public $timestamps = false;

	const BELOTE_CHALLENGE = "Belote Challenge";

	const NB_ROUNDS = 5;


	public function rounds(): HasMany
	{
		return $this->hasMany(BeloteChallengeRound::class,"belote_challenge_id","id");
	}

  public function player(): BelongsTo
  {
      return $this->belongsTo(Player::class);
  }


  public function game(): BelongsTo
  {
      return $this->belongsTo(Game::class);
  }


}
