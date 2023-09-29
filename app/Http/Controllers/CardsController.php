<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Models\Card;
use App\Models\Game;

class CardsController extends Controller
{
	/**
	 * On retourne les cartes (mélangées de façon aléatoire) d'un jeu donné.
	 *
	 * @param string $game_name - Le nom du jeu.
	 * @return Builder[]|\Illuminate\Database\Eloquent\Collection
	 */
	public function getCards(string $game_name)
	{
		/**
		 * @var $game Game
		 */
		$game = Game::query()
			->where("name","=",$game_name)
			->first();

		$cards = Card::query()
			->whereHas("cards_games_links", function (Builder $query) use ($game)
			{
				// On récupère uniquement les cartes du jeu sélectionné.
				return $query->where("game_id","=",$game->id);
			})
			->get();
		// On retourne les cartes mélangées.
		return ($cards->shuffle())->all();
	}

	public function test(Card $card1, Card $card2): int
	{
		file_put_contents("test",json_encode($card1." ".$card2,128));
		return $card1->points+$card2->points;
	}
}
