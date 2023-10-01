<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
	public function get(): \Illuminate\Database\Eloquent\Collection
	{
		return Game::all();
	}
}
