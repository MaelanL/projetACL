import * as React from 'react';


export interface RawGame
{
	id: number;
	name: string;
	description: string;
}

/**
 * Classe représentant un jeu.
 */
class Game
{
	id: number;
	// Le nom du jeu.
	name: string;
	// La description du jeu.
	description: string;


	constructor()
	{
		this.id = 0;
		this.name = '';
		this.description = '';
	}

	public parse(rawGame: RawGame): Game
	{
		if(rawGame.id)
			this.id = rawGame.id;
		if(rawGame.description)
			this.description = rawGame.description;
		if(rawGame.name)
			this.name = rawGame.name;

		return this;
	}

}

export const BELOTE_CHALLENGE: string = "Belote Challenge";

export default Game;


