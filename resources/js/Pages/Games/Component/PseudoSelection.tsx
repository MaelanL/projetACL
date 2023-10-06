import React, {useEffect, useState} from 'react';
import Game from "@/Models/Game";
import {Link} from "@inertiajs/react";
import {Dropdown} from "@/Components/Dropdown";
import {useStateContext} from "@/Contexts/ContextProvider";

interface PseudoSelectionProps
{
	gameName: string;
}

function PseudoSelection({ gameName }: PseudoSelectionProps)
{
	const { userPseudo, setUserPseudo } = useStateContext();
	const { gameSelected } = useStateContext();
	const [pseudo, setPseudo] = useState("");

	const onSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
		ev.preventDefault();
		setUserPseudo(pseudo);
		};

	if(gameSelected == null)
		window.location.href = "/";

	else

	return (

		<div className={"pseudo-selection"}>
			<h2>{gameSelected}</h2>

			<form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
				<input
					id="pseudo"
					name="pseudo"
					type="text"
					value={pseudo}
					onChange={(event) => setPseudo(event.target.value)}
					placeholder="Entrez votre pseudo"
				/>

			<Link className={"button"}
				href={route(`${gameSelected.replace(" ","")}.app`)}
				onClick={() => setUserPseudo(pseudo)
				}
			>
				<i className="ri-play-line"></i>Jouer
			</Link>
				<button
					type="submit"
				>
					Valider
				</button>
				<p>User Pseudo: {userPseudo}</p>
			</form>
		</div>
	);
}

export default PseudoSelection;
