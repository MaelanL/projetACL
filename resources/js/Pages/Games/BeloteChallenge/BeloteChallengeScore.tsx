import * as React from 'react';
import { Link } from '@inertiajs/react';
// import Card from "../Models/Card";
import 'remixicon/fonts/remixicon.css'
import Game from "@/Models/Game";
import axios, {all} from "axios";
import Card from "@/Models/Card";
import GameSelection from "@/Pages/Games/Component/GameSelection";
import {useEffect, useState} from "react";
import {useStateContext} from "@/Contexts/ContextProvider";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";
import BeloteChallengeController from "@/Controllers/BeloteChallengeController";
/**
 * Classe du tableau des score de l'application.
 */
const card = [1,2,3,4,5,6];

function BeloteChallengeScore()
{

	const [scores, setScores] = useState<BeloteChallengeGame[]>([]);
	useEffect(() => {

		// Effectue la requête API au chargement du composant
		BeloteChallengeController.getRecords().then((beloteChallengeGame) => {
			setScores(beloteChallengeGame);
		});
	}, []);
	return (
		<>
			<div className={"score"}>

				<div className={"score"}>
					<h2>TABLEAU DES SCORES :</h2>
					<table>
						<thead>
							<tr>
								<td>Rang</td>
								<td>Date</td>
								<td>Score</td>
								<td>Player</td>
							</tr>

								{scores.map((score, index) => (
									<tr className={"first"} key={index}>
										<td>{index+1}</td>
										<td>{score.played_at.toString()}</td>
										<td>{score.score}</td>
										<td>{score.player?.pseudo}</td>
									</tr>

								))}
						</thead>
					</table>
				</div>

			</div>

		</>
	);
}

export default BeloteChallengeScore;


