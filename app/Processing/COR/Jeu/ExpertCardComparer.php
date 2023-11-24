<?php
namespace App\Processing\COR\Jeu;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;



abstract class ExpertCardComparer extends ExpertCard
{



	private ExpertCardComparer|null $suivant;


	public function __construct(ExpertCardComparer|null $expertCardComparer)
	{
		$this->suivant = $expertCardComparer;
	}

    public function ExpertCardComparer(ExpertCardComparer $expertSuivant)
    {
        $this->suivant = $expertSuivant ;
    }


    public function compare($card1, $card2): int|null
    {
        // cet expert tente de résoudre le problème
        $suivant = $this->compare1($card1, $card2);

        if ($suivant !== null)		// réussite de l’expert
            return $suivant;
        else            			// échec de l’expert
            // le problème est transmis à l’expert suivant
            if ($this->suivant != null)
                return $this->suivant->compare($card1, $card2);
            else    // cet expert est le dernier de la chaîne
                return null; // donc échec de la chaîne

    }

    abstract public function compare1($card1, $card2): int|null;
}


