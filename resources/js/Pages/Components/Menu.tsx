import {Link} from "@inertiajs/react";
import {useStateContext} from "@/Contexts/ContextProvider";


export default function Menu()
{
	const { gameSelected } = useStateContext();


	return(
		<div className={"menu"}>
			<Link href={route('home')} className={"menu-button"}>
				<i className="ri-home-2-line"></i>Accueil
			</Link>
			 <h2>|</h2>
			<Link href={gameSelected ? route(`${gameSelected.replace(" ","")}.stats`) : route('statistics')} className={"menu-button"}>
				<i className="ri-line-chart-line"></i>Statistiques
			</Link>
		</div>
	);
}
