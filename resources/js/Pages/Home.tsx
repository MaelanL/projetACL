import React, { useState, useEffect } from 'react';
import {useStateContext} from "@/Contexts/ContextProvider";
import axios from "axios";
import Game from "@/Models/Game";
import GameSelection from "@/Pages/Games/Component/GameSelection";

function Home()
{
	const { userPseudo } = useStateContext();
	const [games, setGames] = useState<Game[]>([]);

	useEffect(() => {
		// Effectue la requête API au chargement du composant
		axios.get<Game[]>("api/games").then((response) => {
			setGames(response.data);
		});
	}, []);

	return (
		<>
			<div className={"home"}>

				<div className={"games"}>
					{games.map((game, index) => (
						<GameSelection key={index} game={game}/>
					))}
				</div>
				
			</div>
			<div className='regles'><h1>Le joueur utilise les cartes de belote classiques, divisées en quatre catégories de couleurs. <br></br>Chaque catégorie contient 8 cartes, totalisant 32 cartes. L'objectif du jeu est de réaliser le score le plus bas. Après avoir lancé la partie, le joueur tire deux cartes aléatoirement sur cinq tours.<br></br> Les règles pour calculer le score varient selon que les cartes tirées sont de même valeur, de couleur différente ou identique:
			<li>Cartes Dépareillées (en valeur et en couleur) : Si les deux cartes tirées sont différentes tant en valeur qu'en couleur, la somme des valeurs des cartes est ajoutée au score du joueur.</li>

			<li>Même Valeur, Couleur Différente : Si les deux cartes ont la même valeur mais de couleur différente, la somme des valeurs des cartes est soustraite du score du joueur.</li>

			<li>Valeur et couleurs identiques : Si les deux cartes sont de la même couleur et ont la même valeur, le double de la somme des valeurs est soustrait du score du joueur.</li>
</h1></div>
		</>
	);
};

export default Home;
