import Game, {BELOTE_CHALLENGE} from "@/Models/Game";
import React, {useEffect, useState} from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";
import {useStateContext} from "@/Contexts/ContextProvider";

interface mediumScoreProps
{
	mediumScore: number;
	mediumScorePlayer?: number;
}

export default function MediumScore(props: mediumScoreProps) {

	const { userPseudo,setUserPseudo } = useStateContext();


	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: 'Statistique du score moyen par partie',
			},
		},
		maintainAspectRatio: false,
	};

	const labels = ['Score moyen'];

	const data = {
		labels,
		datasets: [
			{
				label: 'Global',
				data: [props.mediumScore],
				backgroundColor: 'rgb(255, 99, 132)',
			},
			{
				label: userPseudo ?? "",
				data: [props.mediumScorePlayer],
				backgroundColor: 'rgb(75, 192, 192)',
			},
		],
	};

	return <Bar options={options} data={data} height="200px" width="200px"  />;
}
