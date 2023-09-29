<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Classe pivot entre un jeu et ses cartes.
 *
 * @property int $id - Identifiant.
 * @property int $card_id - Identifiant de la carte.
 * @property int $game_id - Identifiant du jeu.
 */
class CardsGamesLink extends Model
{
    use HasFactory;

    protected $table = "cards_games_links";
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $keyType = "integer";
    public $timestamps = false;
}
