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




Route::get('/jeu', function () {
    return Inertia::render('Games/BeloteChallenge');
})->name("BeloteChallenge.app");

Route::get('/solitaire', function () {
	return Inertia::render('Games/BeloteChallenge');
})->name("solitaire.app");

Route::get('/pseudo', function () {
	return Inertia::render('Games/Component/PseudoSelection');
})->name("pseudo");

Route::get('/', function () {
	return Inertia::render('Home');
})->name("home");


require __DIR__.'/auth.php';
