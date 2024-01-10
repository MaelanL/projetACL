 import * as React from 'react';

export interface RawCard
{
	id: number;
	color: string;
	type: string;
	value: string;
}


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

	public parse(rawCard: RawCard): Card
	{
		if(rawCard.type)
			this.type = rawCard.type;
		if(rawCard.id)
			this.id = rawCard.id;
		if(rawCard.color)
			this.color = rawCard.color;
		if(rawCard.value)
			this.value = rawCard.value;

		return this;
	}

	/**
	 * Retourne l'url de l'image de la carte.
	 */
	getImageUrl(): string
	{
		return "img/cards/"+this.value+"_"+this.type+".png";
	}
}

export default Card;
