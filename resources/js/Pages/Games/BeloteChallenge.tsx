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
  const [score, setScore] = useState<number | null>(null);
  const [roundNumber, setRoundNumber] = useState<number>(0);
  const [picksRemaining, setPicksRemaining] = useState<number>(5); // Nombre de piochages restants

  useEffect(() => {
    if (userPseudo === null) window.location.href = "/";

    CardController.getCards(BELOTE_CHALLENGE).then((cards) => {
      setCards(cards);
    });

    BeloteChallengeController.startGame(userPseudo).then((beloteChallengeGame) => {
      setBeloteChallengeGame(beloteChallengeGame);
    });
  }, []);

  const calculRoundScore = (): void => {
    if (picksRemaining > 0) {
      BeloteChallengeController.calculJeuRoundScore(cards[0], cards[1]).then((newScore) => {
        setScore(newScore);
        setPicksRemaining(picksRemaining - 1); // Réduire le nombre de piochages restants
        setRoundNumber(roundNumber + 1); // Incrémenter le numéro de round
      });
    }
  };

  const retrieve = (): void => {
    if (picksRemaining > 0) {
      const newCards = [...cards];
      const retrievedCard1 = newCards.pop();
      const retrievedCard2 = newCards.pop();

      setCards(newCards);
      setCard1(retrievedCard1);
      setCard2(retrievedCard2);
      setPicksRemaining(picksRemaining - 1); // Réduire le nombre de piochages restants
      setRoundNumber(roundNumber + 1); // Incrémenter le numéro de round
    }
  };

  const handlePiocherClick = (): void => {
  	retrieve();
    calculRoundScore();
  };

  return (
    <div className="background-container">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "100px" }}>
        <div className="score-round">Round: {roundNumber}</div>
        <div className="score-round">Score: {score !== null ? score : 0}</div>
      </div>
      <div className="game-container">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {card1 && <img src={card1.getImageUrl()} alt="Card 1" />}
          <div className="card">
            <img src="/img/cards/back.png" alt="Back Card" />
            <button className="piocher-button" onClick={handlePiocherClick} disabled={picksRemaining <= 0}>
              Piocher
            </button>
          </div>
          {card2 && <img src={card2.getImageUrl()} alt="Card 2" />}
        </div>
      </div>
    </div>
  );
}

export default BeloteChallenge;



