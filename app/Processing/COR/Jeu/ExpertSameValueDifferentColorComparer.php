<?php
namespace App\Processing\COR\Jeu;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;


class ExpertSameValueDifferentColorComparer extends ExpertCardComparer
{
	public function __construct(ExpertCardComparer|null $expertCardComparer)
	{
		parent::__construct($expertCardComparer);
	}

	public function compare1($card1, $card2): int|null
	{
		if ($card1->value == $card2->value && $card1->color != $card2->color) {
			// Comparaison de la même valeur, couleurs différentes
			// Soustraire la somme des valeurs au score du joueur
			return -($card1->points + $card2->points);
		}
		else
			return null;
	}

}

