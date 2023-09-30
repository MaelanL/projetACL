<?php
namespace App\Processing\COR\Jeu;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Models\*;

public abstract class ExpertCard {


    abstract public function compare($card1, $card2);
}
