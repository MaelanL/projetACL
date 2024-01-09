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


	public function saveRound(Card $card1, Card $card2,int $roundNumber, int $gameId, int $score)
	{
		$round = new BeloteChallengeRound();
		$round->round = $roundNumber;
		$round->card_1_id = $card1->id;
		$round->card_2_id = $card2->id;
		$round->belote_challenge_id = $gameId;
		$round->score = $score;

		$round->save();
	}

	public function saveGame(BeloteChallengeGame $beloteChallengeGame): void
	{
		$beloteChallengeGame->finished = true;
		$beloteChallengeGame->save();
	}

	public function calculRoundScore(Card $card1, Card $card2,int $roundNumber, int $gameId): int
  {
      $expert = InitializeCOR::beloteChallenge();


      // Utilisez $roundNumber et $gameId pour effectuer le calcul du score
      $score = $expert->compare($card1, $card2);

			$this->saveRound($card1,$card2,$roundNumber,$gameId,$score);
			/**
		 	* @var BeloteChallengeGame $beloteChallengeGame
		 	*/
			$beloteChallengeGame = BeloteChallengeGame::find($gameId);
			$beloteChallengeGame->score += $score;
			$beloteChallengeGame->save();

			if($roundNumber == BeloteChallengeGame::NB_ROUNDS)
				$this->saveGame($beloteChallengeGame);

			return $score;
  }

  public function getRecords(): \Illuminate\Database\Eloquent\Collection
	{
		return BeloteChallengeGame::with('player')
			->orderBy('score')
			->take(10)
			->where("finished","=",true)
			->get();
	}

}
