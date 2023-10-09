<?php

namespace App\Processing\COR;

use App\Processing\COR\Jeu\ExpertCard;
use App\Processing\COR\Jeu\ExpertDifferentValueComparer;
use App\Processing\COR\Jeu\ExpertSameValueDifferentColorComparer;
use App\Processing\COR\Jeu\ExpertSameValueSameColorComparer;

class InitializeCOR
{
	public static function beloteChallenge(): ExpertCard
	{
		$expert = null;


		$expert = new ExpertDifferentValueComparer($expert);
		$expert = new ExpertSameValueDifferentColorComparer($expert);
		$expert = new ExpertSameValueSameColorComparer($expert);

		return $expert;
	}
}
