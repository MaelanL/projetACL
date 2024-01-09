import React, {useEffect, useState} from "react";
import axios from "axios";
import Game from "@/Models/Game";
import {useStateContext} from "@/Contexts/ContextProvider";
import GameSelection from "@/Pages/Statistics/Component/GameSelection";


function Statistics()
{

	const { userPseudo } = useStateContext();
	const {gameSelected, setGameSelected } = useStateContext();

	const [games, setGames] = useState<Game[]>([]);

	useEffect(() => {
		// Effectue la requête API au chargement du composant
		axios.get<Game[]>("api/games").then((response) => {
			setGames(response.data);
		});
	}, []);

	return (
		<>

			<div className={"games"}>
				{games.map((game, index) => (
					<GameSelection key={index} game={game}/>
				))}
			</div>
		</>
	);
}


export default Statistics
