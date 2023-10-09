<?php

namespace App\Http\Controllers;

use App\Models\Player;

class PlayerController extends Controller
{
	public function savePlayer(string $pseudo): void
	{
		/**
		 * @var $player Player
		 */
		$player = Player::query()->where("pseudo","=",$pseudo)
			->first();

		if($player == null)
		{
			$newPlayer = new Player();
			$newPlayer->pseudo = $pseudo;
			$newPlayer->save();
		}
	}
}
