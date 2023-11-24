import * as React from 'react';

export interface RawPlayer
{
	id: number;
	pseudo : string;
}


/**
 * Classe représentant une carte.
 */
class Player
{
	id: number;
	pseudo : string;


	constructor()
	{
		this.id = 0;
		this.pseudo = "";
	}

	public parse(rawPlayer: RawPlayer): Player
	{
		if(rawPlayer.pseudo)
			this.pseudo = rawPlayer.pseudo;
		if(rawPlayer.id)
			this.id = rawPlayer.id;
		return this;
	}


}

export default Player;
