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
 * Propriétés de la page d'accueil.
 */
interface ScoreProperties
{
	// onGameSelected: (game: string) => void;
	// onGameSelected:() => void;
	// int: number;
    data: number;

}

/**
 * Etats de la page des scores.
 */
interface ScoreState
{
	// test.
//	cards : Card[];

}

/**
 * Classe du tableau des score de l'application.
 */
const card = [1,2,3,4,5,6];

function Score()
{

	const [score, setScore] = useState<BeloteChallengeGame[]>([]);
	useEffect(() => {
		// Effectue la requête API au chargement du composant
		axios.get<BeloteChallengeGame[]>("api/getBeloteChalenge").then((response) => {
			setScore(response.data)
		});
	}, []);
	return (
		<>
			<div className={"score"}>

				<div className={"score"}>
					<h2>TABLEAU DES SCORES :</h2>
					<tr>
						<td>Rang</td>
						<td>Date</td>
						<td>Score</td>
						<td>Player ID</td>
					</tr>
					{score.map((score, index) => (
						<tr key={index}>
							<td>{index+1}</td>
							<td>{score.played_at.toString()}</td>
							<td>{score.score}</td>
							<td>{score.player_id}</td>
						</tr>

					))}

				</div>

			</div>

		</>
	);
}

export default Score;


