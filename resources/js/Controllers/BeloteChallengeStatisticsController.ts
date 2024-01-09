import Card, {RawCard} from "@/Models/Card";
import axios from "axios";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";
import Player from "@/Models/Player";



export default class BeloteChallengeStatisticsController
{
	public static async getGamesNumber(pseudo: string|null, finished = true): Promise<number>
	{
		let res: number = 0;
		await axios.get<number>(`/api/getBeloteChallengeGamesNumber/${pseudo}/${finished}`).then((response) => {
			res = response.data;
		});
		return res;
	}

	public static async getMediumScore(pseudo: string|null): Promise<number>
	{
		let res: number = 0;
		await axios.get<number>(`/api/getBeloteChallengeMediumScore/${pseudo}`).then((response) => {
			res = response.data;
		});
		return res;
	}

	public static async getMediumScorePerRound(round: number, pseudo: string|null): Promise<number>
	{
		let res: number = 0;
		await axios.get<number>(`/api/getBeloteChallengeMediumScorePerRound/${round}/${pseudo}`).then((response) => {
			res = response.data;
		});
		return res;
	}

	public static async getAllMediumScorePerRound(pseudo: string|null): Promise<number[]>
	{
		let res: number[] = [];
		await axios.get<number[]>(`/api/getBeloteChallengeAllMediumScorePerRound/${pseudo}`).then((response) => {
			res = response.data;
		});
		return res;

	}


}
