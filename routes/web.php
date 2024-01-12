<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route vers l'home de l'application.
Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

// Route vers la page des statistiques.
Route::get('/statistics', function () {
	return Inertia::render('Statistics/Statistics');
})->name('statistics');

// Route vers la page des records de Belote challenge.
Route::get('/BeloteChallenge/record', function () {
    return Inertia::render('Games/BeloteChallenge/BeloteChallengeScore');
})->name('BeloteChallenge.record');

// Route vers la page des records de solitaire.
Route::get('/Solitaire/record', function () {
	return Inertia::render('Games/BeloteChallenge/BeloteChallengeScore');
})->name('solitaire.record');

// Route vers la page de jeu de Belote challenge.
Route::get('/belotechallenge', function () {
    return Inertia::render('Games/BeloteChallenge/BeloteChallenge');
})->name("BeloteChallenge.app");

// Route vers la page de jeu de solitaire.
Route::get('/solitaire', function () {
	return Inertia::render('Games/BeloteChallenge/BeloteChallenge');
})->name("solitaire.app");

// Route vers la page de séléction d'un pseudo.
Route::get('/pseudo', function () {
	return Inertia::render('Games/Component/PseudoSelection');
})->name("pseudo");

// Route vers la page de séléction d'un jeu.
Route::get('/game', function () {
	return Inertia::render('Games/Component/GameSelection');
})->name("game");

Route::get('/', function () {
	return Inertia::render('Home');
})->name("home");
Route::get('/', function () {
	return Inertia::render('Home');
})->name("stat");

// Route vers la page de statistiques de Belote challenge.
Route::get('/BeloteChallenge/stats', function () {
	return Inertia::render('Statistics/Games/BeloteChallengeStatistics');
})->name('BeloteChallenge.stats');

// Route vers la page de statistiques de solitaire.
Route::get('/Solitaire/stats', function () {
	return Inertia::render('Statistics/Games/BeloteChallengeStatistics');
})->name('solitaire.stats');


require __DIR__.'/auth.php';
