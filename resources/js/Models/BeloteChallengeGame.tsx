import * as React from 'react';

export interface RawBeloteChallengeGame
{
	id: number;
	played_at: Date;
	score: number;
	finished: boolean;
	player_id: number;
	game_id: number;
}


/**
 * Classe représentant une carte.
 */
class BeloteChallengeGame
{
	id: number;
	played_at: Date;
	score: number;
	finished: boolean;
	player_id: number;
	game_id: number;


	constructor()
	{
		this.id = 0;
		this.played_at = new Date();
		this.score = 0;
		this.finished = false;
		this.player_id = 0;
		this.game_id = 0;
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
		if(rawBeloteChallengeGame.player_id)
			this.player_id = rawBeloteChallengeGame.player_id;
		if(rawBeloteChallengeGame.game_id)
			this.game_id = rawBeloteChallengeGame.game_id;

		return this;
	}

}

export default BeloteChallengeGame;
