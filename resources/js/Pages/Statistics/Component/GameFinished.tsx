import Game from "@/Models/Game";
import React from "react";
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
import {useStateContext} from "@/Contexts/ContextProvider";

interface GameFinishedProps
{
	gameFinished: number;
	gameUnfinished: number;
	gameFinishedPlayer?: number;
	gameUnfinishedPlayer?: number;
}

export default function GameFinished(props: GameFinishedProps) {

	const { userPseudo } = useStateContext();


	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	 const options = {
		plugins: {
			title: {
				display: true,
				text: 'Statistiques des parties jouées',
			},
		},
		responsive: true,
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
		 maintainAspectRatio: false,
	};

	const labels = ['Global', userPseudo ?? ""];

	 const data = {
		labels,
		datasets: [
			{
				label: 'Parties finies',
				data: [props.gameFinished, props.gameFinishedPlayer],
				backgroundColor: 'rgb(255, 99, 132)',
			},
			{
				label: 'Parties abandonnées',
				data: [props.gameUnfinished, props.gameUnfinishedPlayer],
				backgroundColor: 'rgb(75, 192, 192)',
			},
		],
	};

	return <Bar options={options} data={data} />;
}
