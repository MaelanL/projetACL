import React, {useEffect, useState} from 'react';
import Game from "@/Models/Game";
import {Link} from "@inertiajs/react";
import {Dropdown} from "@/Components/Dropdown";
import {useStateContext} from "@/Contexts/ContextProvider";
import PlayerController from "@/Controllers/PlayerController";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import Home from "@/Pages/Home";

interface PseudoSelectionProps
{
	gameName: string;
}

function PseudoSelection({ gameName }: PseudoSelectionProps)
{
	const { userPseudo, setUserPseudo } = useStateContext();
	const { gameSelected } = useStateContext();
	const [pseudo, setPseudo] = useState("");

	const submit = (): void => {
		setUserPseudo(pseudo);
		PlayerController.savePlayer(pseudo);
	};


	return gameSelected === null ? <Home/>
	:

	(
		<div className='container'>
		<div className='carte1'></div>

		<div className={"pseudo-selection"}>
			<h2>{gameSelected}</h2>

			<form className="mt-8 space-y-6" action="#" method="POST">
				<input
					id="pseudo"
					name="pseudo"
					type="text"
					value={pseudo}
					onChange={(event) => setPseudo(event.target.value)}
					placeholder="Entrez votre pseudo"
				/>
			<br></br>
			<Link className={"button"}
				href={route(`${gameSelected.replace(" ","")}.app`)}
				onClick={() =>{submit()}
				}
			>
				<i className="ri-play-line"></i>Jouer
			</Link>
			</form>
		</div>
				<div className='carte2'></div>
				</div>

	);
}

export default PseudoSelection;
