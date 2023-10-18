import {useStateContext} from "@/Contexts/ContextProvider";
import React, {useEffect, useState} from "react";
import {Link} from "@inertiajs/react";
import Card from "@/Models/Card";
import {BELOTE_CHALLENGE} from "@/Models/Game";
import CardController from "@/Controllers/CardController";
import BeloteChallengeController from "@/Controllers/BeloteChallengeController";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";


function BeloteChallenge ()
{
	const { userPseudo, setUserPseudo } = useStateContext();

	const [card1, setCard1] = useState<Card|undefined>(undefined);
	const [card2, setCard2] = useState<Card|undefined>(undefined);
	const [cards, setCards] = useState<Card[]>([]);
	const [beloteChallengeGame, setBeloteChallengeGame] = useState<BeloteChallengeGame|null>(null);



	useEffect(() => {

		if(userPseudo === null)
			window.location.href = "/";

		CardController.getCards(BELOTE_CHALLENGE).then((cards) =>{
			setCards(cards);
		});

		BeloteChallengeController.startGame(userPseudo).then((beloteChallengeGame) =>{
			setBeloteChallengeGame(beloteChallengeGame);
		})
	}, []);



	const test = (): void => {
		BeloteChallengeController.calculJeuRoundScore(cards[0],cards[1]).then((score) =>
			{
				console.log((cards[0].getImageUrl())+" "+cards[1].getImageUrl())
				console.log(score);
			})
	};

	const retrieve = (): void =>
	{
		const newCards = [...cards];
		const retrievedCard1 = newCards.pop();
		const retrievedCard2 = newCards.pop();

		setCards(newCards);
		setCard1(retrievedCard1);
		setCard2(retrievedCard2);

		console.log(JSON.stringify(card1)+" "+JSON.stringify(card2));
	}

	return (
		<div>

			<Link
				href={route('home')}
				className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
			>
				Home
			</Link>

			<button
				onClick={() => {retrieve()}}
			>Test</button>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {card1 && <img src={card1.getImageUrl()} alt="Card 1" />}
          <div className="game-container">
            <div className="card" style={{ backgroundImage: `url("/img/cards/back.png")` }}>
              <button className="piocher-button" onClick={retrieve}>Piocher</button>
            </div>
          </div>
          {card2 && <img src={card2.getImageUrl()} alt="Card 2" />}
        </div>
      </div>
    </div>
	);
};

export default BeloteChallenge;

