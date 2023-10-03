import React from 'react';
import Game from "@/Models/Game";
import {Link} from "@inertiajs/react";
import {Dropdown} from "@/Components/Dropdown";
import {Navigate, useNavigate} from "react-router-dom";
import PseudoSelection from "@/Pages/Games/Component/PseudoSelection";
import { useStateContext } from '@/Contexts/ContextProvider';

interface GameSelectionProps
{
	game: Game;
}

function GameSelection({ game }: GameSelectionProps)
{
	const { setGameSelected } = useStateContext();

	return (
		<div className={"game"}>
			<h2>{game.name.toUpperCase()}</h2>
			{/*<p>{game.description}</p>*/}
			<Link className={"button"}
				href={route(`pseudo`)}
				onClick={() => setGameSelected(game.name) }
			>
				<i className="ri-play-line"></i>Jouer
			</Link>
			{/*<Link href={route(`${game.name}.record`)}>*/}
			{/*	Tableau des records*/}
			{/*</Link>*/}
			<Dropdown
				collapsedContent={<p>{game.description}</p>}
			/>
		</div>
	);
}

export default GameSelection;
