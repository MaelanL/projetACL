import { useStateContext } from "@/Contexts/ContextProvider";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import Card from "@/Models/Card";
import { BELOTE_CHALLENGE } from "@/Models/Game";
import CardController from "@/Controllers/CardController";
import BeloteChallengeController from "@/Controllers/BeloteChallengeController";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";
import PseudoSelection from "@/Pages/Games/Component/PseudoSelection";


function BeloteChallenge() {
  const { userPseudo, setUserPseudo } = useStateContext();

  const [card1, setCard1] = useState<Card | undefined>(undefined);
  const [card2, setCard2] = useState<Card | undefined>(undefined);
  const [cards, setCards] = useState<Card[]>([]);
  const [beloteChallengeGame, setBeloteChallengeGame] = useState<BeloteChallengeGame | null>(null);
  const [score, setScore] = useState<number>(0);
  const [roundNumber, setRoundNumber] = useState<number>(0);
  const [roundScore, setRoundScore] = useState<number|null>(null);

	const startGame= (reset :boolean = false): void => {

		if (reset)
		{
			setRoundNumber(0);
			setScore(0);
			setCard1(undefined);
			setCard2(undefined);
		}

		CardController.getCards(BELOTE_CHALLENGE).then((cards) => {
			setCards(cards);
		});

		// @ts-ignore
		BeloteChallengeController.startGame(userPseudo).then((beloteChallengeGame) => {
			setBeloteChallengeGame(beloteChallengeGame);
		});
	}



  useEffect(() => {
    if (userPseudo !== null)
			startGame();
  }, []);

  const handlePiocherClick = async (): Promise<void> => {
    if (roundNumber < BeloteChallengeGame.ROUND_NUMBER) {
      const newCards = [...cards];
      const retrievedCard1 = newCards.pop();
      const retrievedCard2 = newCards.pop();

      setCards(newCards);
      setCard1(retrievedCard1);
      setCard2(retrievedCard2);

      if (retrievedCard1 && retrievedCard2) {
      	//calculJeuRoundScore  a 4 paramètres : card1, card2, roundNumber et l'id de la partie
        // @ts-ignore
				const roundScore = await BeloteChallengeController.calculJeuRoundScore(retrievedCard1, retrievedCard2, roundNumber+1, beloteChallengeGame.id);
        setScore(score+roundScore);
				setRoundScore(roundScore);
      }

			setRoundNumber(roundNumber + 1);
    }
  };

	return userPseudo === null ?
		<PseudoSelection gameName={"Belote Challenge"}/>
		:

   (
    <div className="background-container">
      <div className="info">
        <div className="score_and_round">Manche: {roundNumber}</div>
        <div className="score_and_round">Score: {score}</div>
				{roundScore != null &&
					<div className="score_and_round">Score de manche: {score}</div>
				}
			</div>
      <div className="game-container">
        <div className={"cards"}>
          {card1 && <img className={"card"} src={card1.getImageUrl()} alt="Card 1" />}
          <div className="card">
            <img src="/img/cards/back.png" alt="Back Card" />
            <button className="piocher-button" onClick={handlePiocherClick}>
              <h2>Piocher</h2>
            </button>
          </div>
          {card2 && <img className={"card"} src={card2.getImageUrl()} alt="Card 2" />}
        </div>

				{roundNumber >= 5 &&
					<div className={"game-end"}>
						<button className={"button"} onClick={() => {
							startGame(true)
						}}>
							<i className="ri-play-line"></i>Rejouer
						</button>

						<Link className={"button"}
									href={route(`home`)}
						>
							<i className="ri-stop-circle-line"></i>Quitter
						</Link>
					</div>
				}
      </div>
    </div>
  );
}

export default BeloteChallenge;
