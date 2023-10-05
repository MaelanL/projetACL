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
			console.log(cards);
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

			<Link
				href={route('home')}
				className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
			>
				Home
			</Link>

			<button
				onClick={() => {test()}}
			>Test</button>

			{cards.map((card: Card) => (
            <ul key={card.id}>
				 			<img src={card.getImageUrl()}/>
            </ul>
          ))}
		</div>
	);
};

export default Jeu;

