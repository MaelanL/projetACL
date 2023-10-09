import * as React from 'react';
import { Link } from '@inertiajs/react';
// import Card from "../Models/Card";
import 'remixicon/fonts/remixicon.css'



/**
 * Propriétés de la page d'accueil.
 */
interface ScoreProperties
{
	// onGameSelected: (game: string) => void;
	// onGameSelected:() => void;
	// int: number;
    data: number;

}

/**
 * Etats de la page des scores.
 */
interface ScoreState
{
	// test.
//	cards : Card[];

}

/**
 * Classe du tableau des score de l'application.
 */
export class Score extends React.Component<ScoreProperties,ScoreState>
{








  render() {


    return (
      <div>
        <h1>LE SCORE DE TOUTE LA VILLE</h1>
				<i className="ri-admin-line"></i>
          <Link

              href={route('home')}
              className="font-semibold text-red-600 hover:text-yellow-900 dark:text-blue-400 dark:hover:text-red focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >
              H O M E
          </Link>
      </div>
    );
  }
}

export default Score;


