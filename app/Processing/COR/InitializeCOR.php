<?php
namespace App\Processing\COR;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Models\*;

use App\Processing\COR\Jeu\ExpertCard;
use App\Processing\COR\Jeu\ExpertDifferentValueComparer;
use App\Processing\COR\Jeu\ExpertSameValueDifferentColorComparer;
use App\Processing\COR\Jeu\ExpertSameValueSameColorComparer;

public class initialize {
    public static function JeuCOR():ExpertCard{
        $expert = new ExpertCard();
        $expert = new ExpertDifferentValueComparer(null);
        $expert = new ExpertSameValueDifferentColorComparer($expert);
        $expert = new ExpertSameValueSameColorComparer($expert);
        return $expert;
    }

}
