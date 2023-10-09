<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Classe représentant un round d'une partie de belote challenge.
 *
 * @property int $id -.
 * @property int $round -.
 * @property int $score -.
 * @property int $belote_challenge_id -.
 * @property int $card_1_id -.
 * @property int $card_2_id -.
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
