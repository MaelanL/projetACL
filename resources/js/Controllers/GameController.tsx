import Game from "@/Models/Game";
import axios from "axios";

export default class GameController
{

	public static async getGames(): Promise<Game[]>
	{
		let games : Game[] = [];
		await axios.get<Game[]>("api/games").then((response) => {
			games = response.data;
		});
		return games;
	}

}
