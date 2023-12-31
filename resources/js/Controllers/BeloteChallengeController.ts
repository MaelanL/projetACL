import Card, {RawCard} from "@/Models/Card";
import axios from "axios";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";
import Game from "@/Models/Game";
import game from "@/Models/Game";


export default class BeloteChallengeController
{

	public static async calculJeuRoundScore(card1: Card, card2: Card, roundNumber: number, gameId: number): Promise<number>
	{
		let score: number = 0;
		await axios.post<number>(`api/beloteChallengeCalculRoundScore/${card1.id}/${card2.id}/${roundNumber}/${gameId}`,[card1,card2,roundNumber,gameId])
		.then((response) => {
				score = response.data;
			});
		return score;
	}

	public static async startGame(pseudo: string): Promise<BeloteChallengeGame>
	{
		let beloteChallengeGame: BeloteChallengeGame = new BeloteChallengeGame();
		await axios.post<BeloteChallengeGame>(`api/beloteChallengeStartGame/${pseudo}`, [pseudo])
			.then((response) => {
				beloteChallengeGame = beloteChallengeGame.parse(response.data);
			});
		return beloteChallengeGame;
	}

	public static async getRecords(): Promise<BeloteChallengeGame[]>
	{
		let records: BeloteChallengeGame[] = [];
		await axios.get<BeloteChallengeGame[]>(`/api/getBeloteChallengeRecords/`).then((response) => {
			response.data.forEach((game) => {
				records.push(game);
			});
		});
		return records;
	}


}
