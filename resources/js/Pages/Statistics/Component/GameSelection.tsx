import Game from "@/Models/Game";
import {useStateContext} from "@/Contexts/ContextProvider";
import {Link} from "@inertiajs/react";
import {Dropdown} from "@/Components/Dropdown";
import React from "react";

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
			<Link className={"button"} href={route(`${game.name.replace(" ","")}.stats`)}>
				Statistiques
			</Link>
		</div>
	);
}

export default GameSelection;
