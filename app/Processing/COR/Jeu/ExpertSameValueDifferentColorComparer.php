<?php
namespace App\Processing\COR\Jeu;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Models\*;

class ExpertSameValueDifferentColorComparer extends ExpertCardComparer {
    public function compare($card1, $card2) {
        if ($card1->getValue() == $card2->getValue() && $card1->getColor() != $card2->getColor()) {
            // Comparaison de la même valeur, couleurs différentes
            // Soustraire la somme des valeurs au score du joueur
            return -($card1->getPoints() + $card2->getPoints());
        } else {
            // Passer la responsabilité à la classe suivante si nécessaire
            if ($this->nextComparer) {
                return $this->nextComparer->compare($card1, $card2);
            }
            return 0;
        }
    }
}
}
