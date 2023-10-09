import {Link} from "@inertiajs/react";


export default function Menu()
{


	return(
		<div className={"menu"}>
			<Link href={route('home')} className={"menu-button"}>
				<i className="ri-home-2-line"></i>Acceuil
			</Link>
		</div>
	);
}
