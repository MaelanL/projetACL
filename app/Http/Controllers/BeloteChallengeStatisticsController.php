<?php

namespace App\Http\Controllers;

use App\Models\BeloteChallengeGame;
use App\Models\Player;

class BeloteChallengeStatisticsController extends Controller
{
	// Le nombre de décimal à afficher.
	public const DECIMAL = 2;


	/**
	 * Retourne le nombre de parties.
	 * @param string|null $pseudo - Si non null retourne les parties de ce joueur.
	 * @param bool $finished - Vrai si on sélectionne les parties finies, faux sinon.
	 * @return int - Le nombre de parties.
	 */
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

	/**
	 * Retourne le score moyen des parties.
	 * @param string|null $pseudo - Si non null retourne les parties de ce joueur.
	 * @return float - Le score moyen.
	 */
	public function getMediumScore(string|null $pseudo)
	{
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

	/**
	 * Retourne le score moyen d'une manche.
	 * @param int $round - Le numero de la manche.
	 * @param string|null $pseudo - Si non null retourne les parties de ce joueur.
	 * @return float - Le score moyen d'une manche.
	 */
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

	/**
	 * Retourne le score moyen de l'ensemble des manches.
	 * @param string|null $pseudo - Si non null retourne les parties de ce joueur.
	 * @return array - Les scores moyens par manches.
	 */
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
