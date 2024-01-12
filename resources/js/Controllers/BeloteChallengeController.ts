import Card, {RawCard} from "@/Models/Card";
import axios from "axios";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";
import Game from "@/Models/Game";
import game from "@/Models/Game";


export default class BeloteChallengeController
{

	/**
	 * Calcule le score d'une manche.
	 * @param card1 - La 1ere carte piochée.
	 * @param card2 - La 2ème carte piochée.
	 * @param roundNumber - Le numéro de la manche.
	 * @param gameId - L'identifiant de la partie.
	 */
	public static async calculJeuRoundScore(card1: Card, card2: Card, roundNumber: number, gameId: number): Promise<number>
	{
		let score: number = 0;
		await axios.post<number>(`api/beloteChallengeCalculRoundScore/${card1.id}/${card2.id}/${roundNumber}/${gameId}`,[card1,card2,roundNumber,gameId])
		.then((response) => {
				score = response.data;
			});
		return score;
	}

	/**
	 * Lance une partie de Belote challenge.
	 * @param pseudo - Le pseudo du joueur lançant la partie.
	 */
	public static async startGame(pseudo: string): Promise<BeloteChallengeGame>
	{
		let beloteChallengeGame: BeloteChallengeGame = new BeloteChallengeGame();
		await axios.post<BeloteChallengeGame>(`api/beloteChallengeStartGame/${pseudo}`, [pseudo])
			.then((response) => {
				beloteChallengeGame = beloteChallengeGame.parse(response.data);
			});
		return beloteChallengeGame;
	}

	/**
	 * Retourne les 10 meilleures parties de Belote challenge.
	 */
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
