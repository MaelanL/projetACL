import Card from "@/Models/Card";
import axios from "axios";


export default class PlayerController
{

	public static async savePlayer(pseudo: string): Promise<void>
	{
		await axios.post<void>(`api/savePlayer/${pseudo}`, [pseudo])
			.then((response) => {
			});
	}

}
