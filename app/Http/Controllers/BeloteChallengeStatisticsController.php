<?php

namespace App\Http\Controllers;

use App\Models\BeloteChallengeGame;
use App\Models\Player;

class BeloteChallengeStatisticsController extends Controller
{
	public const DECIMAL = 2;

	public function getGamesNumber(string|null $pseudo, bool $finished)
	{
		if($pseudo != "null")
		{
			$player = Player::getPlayerByPseudo($pseudo);

			return BeloteChallengeGame::with('player')
				->where("player_id", "=", $player->id)
				->where("finished", "=", $finished)
				->count();
		}
		else
			return BeloteChallengeGame::with('player')
				->where("finished","=",$finished)
				->count();
	}

	public function getMediumScore(string|null $pseudo)
	{
		file_put_contents("testtt",$pseudo);

		/**
		 * @var $belotteChallengeGames BeloteChallengeGame[]
		 */
		if($pseudo != "null")
		{
			$player = Player::getPlayerByPseudo($pseudo);

			$belotteChallengeGames = BeloteChallengeGame::query()
				->where("player_id", "=", $player->id)
				->where("finished", "=", true)
				->get();
		}
		else
			$belotteChallengeGames = BeloteChallengeGame::query()
				->where("finished","=",true)
				->get();

		$score =0;
		foreach ($belotteChallengeGames as $belotteChallengeGame)
		{
			$score += $belotteChallengeGame->score;
		}

		return round($score/count($belotteChallengeGames),self::DECIMAL);
	}

	public function getMediumScorePerRound(int $round, string|null $pseudo)
	{

		if($pseudo != "null")
		{
			$player = Player::getPlayerByPseudo($pseudo);

			$belotteChallengeGames = BeloteChallengeGame::with(['rounds' => fn($query) => $query->where('round', '=', $round)])
				->where("player_id", "=", $player->id)
				->where("finished", "=", true)
				->get();
		}
		else
			$belotteChallengeGames = BeloteChallengeGame::with(['rounds' => fn($query)  => $query->where('round', '=', $round)])
				->where("finished","=",true)
				->get();
		/**
		 * @var $belotteChallengeGames BeloteChallengeGame[]
		 */
		$score =0;
		foreach ($belotteChallengeGames as $belotteChallengeGame)
		{
			$score += $belotteChallengeGame->rounds->first()->score;
		}

		return round($score/count($belotteChallengeGames),self::DECIMAL);
	}

	public function getAllMediumScorePerRound(string|null $pseudo)
	{
		$scores = [];

		for ($i =0; $i < BeloteChallengeGame::NB_ROUNDS; $i++)
		{
			$scores[] = $this->getMediumScorePerRound($i+1,$pseudo);
		}

		return $scores;

	}


}
