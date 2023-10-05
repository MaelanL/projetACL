import * as React from 'react';
import { Link } from '@inertiajs/react';
import Card from "../Models/Card";
import 'remixicon/fonts/remixicon.css'



/**
 * Propriétés de la page d'accueil.
 */
interface HomeProperties
{
	// onGameSelected: (game: string) => void;
	// onGameSelected:() => void;
	// int: number;
	data: number;

}

/**
 * Etats de la page d'accueil.
 */
interface HomeState
{
	// test.
	cards : Card[];

}

/**
 * Classe de l'accueil de l'application.
 */
export class Home extends React.Component<HomeProperties,HomeState>
{




	componentDidMount(): void
	{
		// test
		fetch('/api/cards/jeu')
			.then(response => {
				return response.json();
			})
			.then((cards : Card[])=> {
				this.setState({cards: cards});
				console.log(cards);
			});
	}

	protected test(): void
	{
		fetch( 'api/test/'+this.state.cards[0].id+"/"+this.state.cards[1].id, {
			method:'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.cards.splice(0,2))
		})
			.then(response => {
				return response.json();
			})
			.then( data => {
				console.log(data);
			})
	}

	render() {


		return (
			<div>
				<h1>App</h1>
				<i className="ri-admin-line"></i>



				<button onClick={() => {this.test()}}>
					<i className="ri-admin-fill"></i>
					test
				</button>

				<Link

					href={route('pseudoapp')}
					className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
				>
					Pseudo
				</Link>
				<button onClick={() =>{
					this.test();
				}}>
					Testttttttttttttt
				</button>

				<Link

					href={route('dashboard')}
					className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
				>
					dashboard
				</Link>
			</div>
		);
	}
}

export default Home;

