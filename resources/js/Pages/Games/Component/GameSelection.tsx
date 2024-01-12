import React from 'react';
import Game from "@/Models/Game";
import {Link} from "@inertiajs/react";
import {Dropdown} from "@/Components/Dropdown";
import { useStateContext } from '@/Contexts/ContextProvider';

interface GameSelectionProps
{
	game: Game;
}

function GameSelection({ game }: GameSelectionProps)
{
	const { setGameSelected } = useStateContext();
	const { userPseudo } = useStateContext();

	return (
		<div className={"game"}>
			<h2>{game.name.toUpperCase()}</h2>
			<div className={"buttons"}>
			<Link className={"button"}
				href={userPseudo ? route(`${game.name.replace(" ","")}.app`) : route(`pseudo`)}
				onClick={() => setGameSelected(game.name) }
			>
				<i className="ri-play-line"></i>Jouer
			</Link>
			<Link className={"button"} href={route(`${game.name.replace(" ","")}.record`)}>
				<i className="ri-star-line"></i>Tableau des records
			</Link>
			</div>
			<Dropdown
				collapsedContent={<p>{game.description}</p>}
			/>
		</div>
	);
}

export default GameSelection;
