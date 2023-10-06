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


// Retourne les cartes d'un jeu.
Route::get('cards/{gameName}', 'App\Http\Controllers\CardsController@getCards');

Route::post("test/{card1}/{card2}",'App\Http\Controllers\CardsController@test');
Route::post("beloteChallengeCalculRoundScore/{card1}/{card2}",'App\Http\Controllers\BeloteChallengeController@calculRoundScore');


Route::get('games', 'App\Http\Controllers\GameController@get');


