<?php

namespace App\Http\Controllers;

use App\Models\BeloteChallengeGame;
use App\Models\BeloteChallengeRound;
use App\Models\Card;
use App\Models\Game;
use App\Models\Player;
use App\Processing\COR\InitializeCOR;

class BeloteChallengeController extends Controller
{

	public function startGame(string $pseudo): BeloteChallengeGame
	{
		/**
		 * @var $game Game
		 */
		$game = Game::query()
			->where("name","=",BeloteChallengeGame::BELOTE_CHALLENGE)
			->first();

		/**
		 * @var $player Player
		 */
		$player = Player::query()
			->where("pseudo","=",$pseudo)
			->first();

		$beloteChallengeGame = new BeloteChallengeGame();
		$beloteChallengeGame->player_id = $player->id;
		$beloteChallengeGame->game_id = $game->id;
		$beloteChallengeGame->score = 0;
		$beloteChallengeGame->save();

		return $beloteChallengeGame;
	}

	public function calculRoundScore(Card $card1, Card $card2,int $roundNumber, int $gameId): int
  {
      $expert = InitializeCOR::beloteChallenge();

	
      // Utilisez $roundNumber et $gameId pour effectuer le calcul du score
      return $expert->compare($card1, $card2);
  }
  public function get(): \Illuminate\Database\Eloquent\Collection
	{
		return BeloteChallengeGame::with('player')
			->orderBy('score')
			->take(10)
			->get();
	}

}
