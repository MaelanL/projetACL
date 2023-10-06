import Card from "@/Models/Card";
import axios from "axios";


export default class BeloteChallengeController
{

	public static async calculJeuRoundScore(card1: Card, card2: Card): Promise<number>
	{
		let score: number = 0;
		await axios.post<number>(`api/beloteChallengeCalculRoundScore/${card1.id}/${card2.id}`, [card1,card2])
			.then((response) => {
				score = response.data;
			});
		return score;
	}

}
