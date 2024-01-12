import * as React from 'react';
import Player, {RawPlayer} from "@/Models/Player";

export interface RawBeloteChallengeGame
{
	id: number;
	played_at: Date;
	score: number;
	finished: boolean;
	game_id: number;
	player ?: RawPlayer;
}


/**
 * Classe représentant une carte.
 */
class BeloteChallengeGame
{
	id: number;
	// Date à laquelle la partie a été jouée.
	played_at: Date;
	// Le score de la partie.
	score: number;
	// Vrai si la partie est finie, faux sinon.
	finished: boolean;
	// L'identifiant de la partie.
	game_id: number;
	// Le joueur.
	player ?: Player;

	// Le nombre de manches d'une partie.
	static ROUND_NUMBER = 5;

	constructor()
	{
		this.id = 0;
		this.played_at = new Date();
		this.score = 0;
		this.finished = false;
		this.game_id = 0;
		this.player = undefined;
	}

	public parse(rawBeloteChallengeGame: RawBeloteChallengeGame): BeloteChallengeGame
	{
		if(rawBeloteChallengeGame.id)
			this.id = rawBeloteChallengeGame.id;
		if(rawBeloteChallengeGame.played_at)
			this.played_at = rawBeloteChallengeGame.played_at;
		if(rawBeloteChallengeGame.score)
			this.score = rawBeloteChallengeGame.score;
		if(rawBeloteChallengeGame.finished)
			this.finished = rawBeloteChallengeGame.finished;
		if(rawBeloteChallengeGame.game_id)
			this.game_id = rawBeloteChallengeGame.game_id;
		if(rawBeloteChallengeGame.player)
			this.player?.parse(rawBeloteChallengeGame.player);

		return this;
	}


}

export default BeloteChallengeGame;
