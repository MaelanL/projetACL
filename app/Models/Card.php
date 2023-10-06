<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;


/**
 * Classe représentant une carte.
 *
 * @property int $id - Identifiant de la carte.
 * @property string $value - La valeur de la carte.
 * @property string $color - La couleur de la carte.
 * @property string $type - Le type de la carte.
 * @property int $points - Le nombre de points de la carte.
 */
class Card extends Model
{
	use HasFactory;

	protected $table = "cards";
	protected $primaryKey = "id";
	public $incrementing = true;
	protected $keyType = "integer";
	public $timestamps = false;

	public function cards_games_links(): HasMany
	{
		return $this->hasMany(CardsGamesLink::class);
	}
}
