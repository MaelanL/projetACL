import { useStateContext } from "@/Contexts/ContextProvider";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import Card from "@/Models/Card";
import { BELOTE_CHALLENGE } from "@/Models/Game";
import CardController from "@/Controllers/CardController";
import BeloteChallengeController from "@/Controllers/BeloteChallengeController";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";

function BeloteChallenge() {
  const { userPseudo, setUserPseudo } = useStateContext();

  const [card1, setCard1] = useState<Card | undefined>(undefined);
  const [card2, setCard2] = useState<Card | undefined>(undefined);
  const [cards, setCards] = useState<Card[]>([]);
  const [beloteChallengeGame, setBeloteChallengeGame] = useState<BeloteChallengeGame | null>(null);
  const [score, setScore] = useState<number>(0);
  const [roundNumber, setRoundNumber] = useState<number>(0);

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

		BeloteChallengeController.startGame(userPseudo).then((beloteChallengeGame) => {
			setBeloteChallengeGame(beloteChallengeGame);
		});
	}



  useEffect(() => {
    if (userPseudo === null) window.location.href = "/";

		startGame();
  }, []);

  const handlePiocherClick = async (): Promise<void> => {
    if (roundNumber < 5) {
      const newCards = [...cards];
      const retrievedCard1 = newCards.pop();
      const retrievedCard2 = newCards.pop();

      setCards(newCards);
      setCard1(retrievedCard1);
      setCard2(retrievedCard2);
      setRoundNumber(roundNumber + 1);

			console.log('BeloteChallengeGame:', BeloteChallengeGame);
      console.log('roundNumber:', roundNumber);

      if (retrievedCard1 && retrievedCard2) {
      	//calculJeuRoundScore  a 4 paramètres : card1, card2, roundNumber et l'id de la partie
        const roundScore = await BeloteChallengeController.calculJeuRoundScore(retrievedCard1, retrievedCard2, roundNumber, beloteChallengeGame.id);
        setScore(score+roundScore);
      }
    }
  };

  return (
    <div className="background-container">
      <div>
        <div className="score_and_round">Round: {roundNumber}</div>
        <div className="score_and_round">Score: {score}</div>
      </div>
      <div className="game-container">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {card1 && <img src={card1.getImageUrl()} alt="Card 1" />}
          <div className="card">
            <img src="/img/cards/back.png" alt="Back Card" />
            <button className="piocher-button" onClick={handlePiocherClick} disabled={roundNumber >= 5}>
              Piocher
            </button>
          </div>
          {card2 && <img src={card2.getImageUrl()} alt="Card 2" />}
        </div>

				{roundNumber >= 5 &&
					<div>
						<button onClick={() => {
							startGame(true)
						}}>
							Rejouer
						</button>

						<Link className={"button"}
									href={route(`home`)}
						>
							<i className="ri-play-line"></i>Quitter
						</Link>
					</div>
				}
      </div>
    </div>
  );
}

export default BeloteChallenge;
