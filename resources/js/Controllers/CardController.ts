import axios from "axios";
import Card from "@/Models/Card";

export default class CardController
{

	public static async getCards(gameName: string): Promise<Card[]> {
		let cards: Card[] = [];
		await	axios.get<Card[]>(`api/cards/${gameName}`)
			.then((response) => {
				cards = response.data;
			});
			return cards;
	}

	public static async calculJeuRoundScore(card1: Card, card2: Card): Promise<number>
	{
		let score: number = 0;
		await axios.post<number>(`api/test/${card1.id}/${card2.id}`, [card1,card2])
			.then((response) => {
				score = response.data;
			});
		return score;
	}
}
