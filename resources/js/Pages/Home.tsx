import React, { useState, useEffect } from 'react';
import {useStateContext} from "@/Contexts/ContextProvider";
import axios from "axios";
import Game from "@/Models/Game";
import GameSelection from "@/Pages/Games/Component/GameSelection";
import GameController from "@/Controllers/GameController";


function Home()
{
	const { userPseudo } = useStateContext();
	const [games, setGames] = useState<Game[]>([]);



	useEffect(() => {
		// Effectue la requête API au chargement du composant
		GameController.getGames().then((games) =>{
			setGames(games);
		})
	}, []);

	return (
		<div className={"home"}>

			<div className={"games"}>
				{games.map((game, index) => (
					<GameSelection key={index} game={game}/>
				))}
			</div>
		</div>
	);
};

export default Home;
