<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Processing\COR\InitializeCOR;

class BeloteChallengeController extends Controller
{

	public function calculRoundScore(Card $card1, Card $card2)
	{
		$expert = InitializeCOR::beloteChallenge();

		return $expert->compare($card1,$card2);
	}


}
