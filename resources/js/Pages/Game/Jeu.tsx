import {useStateContext} from "@/Contexts/ContextProvider";
import React, {useEffect, useState} from "react";
import {Link} from "@inertiajs/react";
import Card from "@/Models/Card";
import  {JEU} from "@/Models/Game";
import CardController from "@/Controllers/CardController";

function Jeu ()
{
	const [cards, setCards] = useState<Card[]>([]);
	const { userPseudo, setUserPseudo } = useStateContext();
	const [pseudo, setPseudo] = useState("");



	useEffect(() => {
		CardController.getCards(JEU).then((cards) =>{
			setCards(cards);
		})
	}, []);

	const onSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
		ev.preventDefault();
		console.log("submit");
		setUserPseudo(pseudo);
		console.log(userPseudo);
	};

	const test = (): void => {
		CardController.calculJeuRoundScore(cards[0],cards[1]).then((score) =>
			{
				console.log(score);
			})
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
				<input
					id="pseudo"
					name="pseudo"
					type="text"
					value={pseudo}
					onChange={(ev) => setPseudo(ev.target.value)}
					className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="Entrez votre pseudo"
				/>

				<button
					type="submit"
					className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Sign in
				</button>
				<p>User Pseudo: {userPseudo}</p>
			</form>

			<Link
				href={route('home')}
				className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
			>
				Home
			</Link>

			<button
				onClick={() => {test()}}
			>Test</button>
		</div>
	);
};

export default Jeu;

