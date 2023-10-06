import {useStateContext} from "@/Contexts/ContextProvider";
import React, {useEffect, useState} from "react";
import {Link} from "@inertiajs/react";
import Card from "@/Models/Card";
import {BELOTE_CHALLENGE} from "@/Models/Game";
import CardController from "@/Controllers/CardController";
import BeloteChallengeController from "@/Controllers/BeloteChallengeController";

function BeloteChallenge ()
{
	const [cards, setCards] = useState<Card[]>([]);
	const { userPseudo, setUserPseudo } = useStateContext();
	const [pseudo, setPseudo] = useState("");



	useEffect(() => {
		CardController.getCards(BELOTE_CHALLENGE).then((cards) =>{
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
		BeloteChallengeController.calculJeuRoundScore(cards[0],cards[1]).then((score) =>
			{
				console.log((cards[0].getImageUrl())+" "+cards[1].getImageUrl())
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

export default BeloteChallenge;

