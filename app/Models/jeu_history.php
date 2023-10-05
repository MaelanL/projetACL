<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Classe représentant l'historique de jeu.
 *
 * @property int $id - Identifiant de l'historique.
 * @property timestamp $played_at - Date de la partie.
 * @property int $score - Score de la partie.
 * @property boolean $finished - Indique si la partie à été abandonnée ou non.
 * @property int $player_id - Identifiant du joueur.
 * @property int $game_id - Identifiant du jeu.
 * 
 */

class jeu_history extends Model
{
    use HasFactory;

    protected $table = "jeu_histories";
	protected $primaryKey = "id";
	public $incrementing = true;
	protected $keyType = "integer";
	public $timestamps = false;
}
