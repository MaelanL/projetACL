 import * as React from 'react';


/**
 * Classe représentant une carte.
 */
class Card
{
	id: number;
	// La couleur de la carte.
	color: string;
	// Le type de la carte.
	type: string;
	// La valeur de la carte.
	value: string;
	// Le nombre de points de la carte.
	points?: number;


	constructor()
	{
		this.id = 0;
		this.color = '';
		this.type = '';
		this.value = '';
	}


	public getImageUrl(): string
	{
		return this.value+"_"+this.type+".png";
	}
}

export default Card;
