<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Classe représentant une manche d'une partie de belote challenge.
 *
 * @property int $id - L'identifiant.
 * @property int $round - Le numero de la manche.
 * @property int $score - Le score de la manche.
 * @property int $belote_challenge_id - L'identifiant de la partie.
 * @property int $card_1_id - L'identifiant de la 1ere carte piochée.
 * @property int $card_2_id - L'identifiant de la 2eme carte piochée.
 *
 * @property BeloteChallengeGame $belote_challenge - La partie de Belote challenge;
 * @property Card $card_1 - La 1ere carte piochée;
 * @property Card $card_2 - La 2ème carte piochée;
 *
 */
class BeloteChallengeRound extends Model
{
	use HasFactory;

	protected $table = "belote_challenge_rounds";
	protected $primaryKey = "id";
	public $incrementing = true;
	protected $keyType = "integer";
	public $timestamps = false;


	public function belote_challenge(): BelongsTo
	{
		return $this->belongsTo(BeloteChallengeGame::class);

	}

	public function card_1(): HasOne
	{
		return $this->hasOne(Card::class, 'id', 'card_1_id');
	}
	public function card_2(): HasOne
	{
		return $this->hasOne(Card::class, 'id', 'card_2_id');
	}
}
