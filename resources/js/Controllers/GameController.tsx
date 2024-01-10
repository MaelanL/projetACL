import Game, {RawGame} from "@/Models/Game";
import axios from "axios";

export default class GameController
{

	/**
	 * Retourne les jeux.
	 */
	public static async getGames(): Promise<Game[]>
	{
		let games : Game[] = [];
		await axios.get<RawGame[]>("api/games").then((response) => {
			response.data.forEach((rawGame) => {
				games.push(new Game().parse(rawGame));
			});
		});
		return games;
	}

}
