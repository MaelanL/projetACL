import {Link} from "@inertiajs/react";


export default function Menu()
{


	return(
		<div className={"menu"}>
			<Link href={route('home')} className={"menu-button"}>
				<i className="ri-home-2-line"></i>Accueil
			</Link>
			<Link href={route('stat')} className={"menu-button"}>
				<i className="ri-line-chart-line"></i>Statistiques
			</Link>
		</div>
	);
}
