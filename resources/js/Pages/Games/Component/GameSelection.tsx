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
		<div className='contain'>
		<div className={"game"}>
		
			<h2>{game.name.toUpperCase()}</h2>
			<div className={"buttons"}>
			<Link className={"button"}
				href={userPseudo ? route(`${game.name.replace(" ","")}.app`) : route(`pseudo`)}
				onClick={() => setGameSelected(game.name) }
			>
			Jouer
			</Link>
			<br></br>
			<Link className={"button"} href={route(`${game.name.replace(" ","")}.record`)}>
			Tableau des records
			</Link>
			</div>
		</div>
		<div className='carte'></div>

		</div>		
	);
}

export default GameSelection;
