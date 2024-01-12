import axios from "axios";
import Card, {RawCard} from "@/Models/Card";

export default class CardController
{

	/**
	 * Retourne les cartes d'un jeu.
	 * @param gameName - Le nom du jeu.
	 */
	public static async getCards(gameName: string): Promise<Card[]> {
		let cards: Card[] = [];
		await	axios.get<RawCard[]>(`api/cards/${gameName}`)
			.then((response) => {
				response.data.forEach((rawCard) =>{
					cards.push(new Card().parse(rawCard));
				})
			});
			return cards;
	}
}
