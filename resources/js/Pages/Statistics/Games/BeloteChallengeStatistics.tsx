import React, {useEffect, useState} from "react";
import {ContextProvider, useStateContext} from "@/Contexts/ContextProvider";
import BeloteChallengeStatisticsController from "@/Controllers/BeloteChallengeStatisticsController";
import GameFinished from "@/Pages/Statistics/Component/GameFinished";
import MediumScorePerRound from "@/Pages/Statistics/Component/MediumScorePerRound";
import MediumScore from "@/Pages/Statistics/Component/MediumScore";
import {Link} from "@inertiajs/react";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";
import BeloteChallengeController from "@/Controllers/BeloteChallengeController";


function BeloteChallengeStatistics()
{
	const { userPseudo,setUserPseudo } = useStateContext();


	const [pseudoStat, setPseudoStat] = useState<string>("");

	const [gameFinished, setGameFinished] = useState<number>(0);
	const [gameFinishedPlayer, setGameFinishedPlayer] = useState<number>(0);

	const [gameUnfinished, setGameUnfinished] = useState<number>(0);
	const [gameUnfinishedPlayer, setGameUnfinishedPlayer] = useState<number>(0);

	const [mediumScorePerRound, setMediumScorePerRound] = useState<number[]>([]);
	const [mediumScorePerRoundPlayer, setMediumScorePerRoundPlayer] = useState<number[]>([]);

	const [mediumScore, setMediumScore] = useState<number>(0);
	const [mediumScorePlayer, setMediumScorePlayer] = useState<number>(0);


	useEffect(() => {

		const pseudo = userPseudo ?? window.localStorage.getItem('STORE_PSEUDO');
		if (pseudo !== null)
		{
			setUserPseudo(pseudo);
		}
		setStatistics(pseudo);

	}, []);

	const setStatistics = async (pseudo: string|null): Promise<void> => {
		if (pseudo !== null)
		{
			BeloteChallengeStatisticsController.getMediumScore(pseudo).then((mediumScorePlayer: number) => {
				setMediumScorePlayer(mediumScorePlayer);
			});
			BeloteChallengeStatisticsController.getGamesNumber(pseudo).then((gameFinishedPlayer: number) =>{
				setGameFinishedPlayer(gameFinishedPlayer);
			});
			BeloteChallengeStatisticsController.getGamesNumber(pseudo,false).then((gameUnfinishedPlayer: number) =>{
				setGameUnfinishedPlayer(gameUnfinishedPlayer);
			});
			BeloteChallengeStatisticsController.getAllMediumScorePerRound(userPseudo).then((mediumScorePerRoundPlayer: number[]) => {
				setMediumScorePerRoundPlayer(mediumScorePerRoundPlayer);
			});
		}


		BeloteChallengeStatisticsController.getMediumScore(null).then((mediumScore: number) => {
			setMediumScore(mediumScore);
		});
		BeloteChallengeStatisticsController.getGamesNumber(null).then((gameFinished: number) =>{
			setGameFinished(gameFinished);
		});
		BeloteChallengeStatisticsController.getGamesNumber(null,false).then((gameUnfinished: number) =>{
			setGameUnfinished(gameUnfinished);
		});
		BeloteChallengeStatisticsController.getAllMediumScorePerRound(null).then((mediumScorePerRound: number[]) => {
			// console.log(mediumScore);
			setMediumScorePerRound(mediumScorePerRound);

		});
	};

	return (

		<div className={"belote-challenge-statistics"}>

			{userPseudo === null &&
				<>

					<input
						id="pseudo"
						name="pseudo"
						type="text"
						value={pseudoStat}
						onChange={(event) => setPseudoStat(event.target.value)}
						placeholder="Entrez votre pseudo"
					/>

					<button

						onClick={() => {
							setStatistics(pseudoStat);
							setUserPseudo(pseudoStat)
						}}
					>Valider</button>

				</>
			}

			<div className={"game-finished-stat"}>

			<GameFinished
				gameFinished={gameFinished}
				gameUnfinished={gameUnfinished}
				gameFinishedPlayer={gameUnfinishedPlayer}
				gameUnfinishedPlayer={gameUnfinishedPlayer}
			/>
			</div>

			<div className={"medium-score-round-stat"}>
				<MediumScorePerRound mediumScorePerRound={mediumScorePerRound}
					mediumScorePerRoundPlayer={mediumScorePerRoundPlayer}
				/>
			</div>

			<div className={"medium-score-stat"}>
				<MediumScore mediumScore={mediumScore}
									 mediumScorePlayer={mediumScorePlayer}/>
			</div>

		</div>
	);
}

export default BeloteChallengeStatistics
