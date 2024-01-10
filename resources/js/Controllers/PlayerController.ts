import Card from "@/Models/Card";
import axios from "axios";


export default class PlayerController
{

	/**
	 * Sauvegarde un joueur (s'il n'existe pas)
 	 * @param pseudo - Le pseudo du joueur.
	 */
	public static async savePlayer(pseudo: string): Promise<void>
	{
		await axios.post<void>(`api/savePlayer/${pseudo}`, [pseudo])
			.then((response) => {
			});
	}

}
