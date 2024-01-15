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

interface mediumScorePerRoundProps
{
	mediumScorePerRound: number[];
	mediumScorePerRoundPlayer?: number[];
}

export default function MediumScorePerRound(props: mediumScorePerRoundProps) {

	const { userPseudo } = useStateContext();

	const [labels, setLabels] = useState<string[]>([]);


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
				text: 'Statistique des scores moyens par manche',
				color: 'rgb(255,255,255)'
			},
		},
		responsive: true,
		interaction: {
			mode: 'index' as const,
			intersect: false,
		},
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

	useEffect(() => {
		for (let i = 1; i <= BeloteChallengeGame.ROUND_NUMBER ; i++) {
			labels.push("manche "+i);
			setLabels(labels);
		}


	}, []);

	const data = {
		labels,
		datasets: [
			{
				label: 'Global',
				data: props.mediumScorePerRound,
				backgroundColor: 'rgb(255, 99, 132)',
				stack: 'Stack 0',
			},
			{
				label: userPseudo ?? "",
				data: props.mediumScorePerRoundPlayer,
				backgroundColor: 'rgb(75, 192, 192)',
				stack: 'Stack 1',
			},
		],
	};

	return <Bar options={options} data={data} />;
}
