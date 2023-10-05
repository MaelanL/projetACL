<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
