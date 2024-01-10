<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{

	/**
	 * Retourne les jeux à afficher.
	 * @return \Illuminate\Database\Eloquent\Collection
	 */
	public function get(): \Illuminate\Database\Eloquent\Collection
	{
		return Game::query()->where("display","=",true)
			->get();
	}
}
