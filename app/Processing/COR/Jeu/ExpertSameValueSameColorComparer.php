<?php
namespace App\Processing\COR\Jeu;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Models\*;



class ExpertSameValueSameColorComparer extends ExpertCardComparer {
    public function compare($card1, $card2) {
        if ($card1->getValue() == $card2->getValue() && $card1->getColor() == $card2->getColor()) {
            // Comparaison de la même valeur et même couleur
            // Soustraire le double de la somme des valeurs au score du joueur
            return -2 * ($card1->getPoints() + $card2->getPoints());
        } else {
            // Passer la responsabilité à la classe suivante si nécessaire
            if ($this->nextComparer) {
                return $this->nextComparer->compare($card1, $card2);
            }
            return 0;
        }
    }
}

