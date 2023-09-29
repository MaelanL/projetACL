<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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



}
