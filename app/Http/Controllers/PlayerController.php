<?php

namespace App\Http\Controllers;

use App\Models\Player;

class PlayerController extends Controller
{
	/**
	 * Sauvegarde un joueur (s'il nexiste pas déjà).
	 * @param string $pseudo - Le pseudo du joueur.
	 * @return void
	 */
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
