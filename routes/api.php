<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// Route des cartes.
Route::get('cards/{gameName}', 'App\Http\Controllers\CardsController@getCards');

// Routes des Belotes challenges.
Route::post("beloteChallengeCalculRoundScore/{card1}/{card2}/{roundNumber}/{gameId}",'App\Http\Controllers\BeloteChallengeController@calculRoundScore');
Route::post("beloteChallengeStartGame/{pseudo}",'App\Http\Controllers\BeloteChallengeController@startGame');
Route::get('getBeloteChallengeRecords', 'App\Http\Controllers\BeloteChallengeController@getRecords');

// Route des joueurs.
Route::post("savePlayer/{pseudo}",'App\Http\Controllers\PlayerController@savePlayer');


// Route des statistiques de Belote challenge.
Route::get("getBeloteChallengeGamesNumber/{player}/{finished}", 'App\Http\Controllers\BeloteChallengeStatisticsController@getGamesNumber');
Route::get("getBeloteChallengeMediumScorePerRound/{round}/{player}", 'App\Http\Controllers\BeloteChallengeStatisticsController@getMediumScorePerRound');
Route::get("getBeloteChallengeAllMediumScorePerRound/{player}", 'App\Http\Controllers\BeloteChallengeStatisticsController@getAllMediumScorePerRound');
Route::get("getBeloteChallengeMediumScore/{player}", 'App\Http\Controllers\BeloteChallengeStatisticsController@getMediumScore');

// Route des jeux.
Route::get('games', 'App\Http\Controllers\GameController@get');



