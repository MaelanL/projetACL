import React from "react";

/**
 * Interface des propriétés d'un accordéon dépliable.
 */
interface DropdownProperties
{
	/**
	 * Détermine si l'accordéon est replié par défaut ou non.
	 * Si la propriété n'est pas renseignée, il ne l'est pas.
	 */
	collapsedByDefault?: boolean;

	/**
	 * Le contenu à afficher lorsque l'accordéon est replié.
	 */
	collapsedContent?: React.ReactNode;
}

/**
 * Interface de l'état d'un accordéeon dépliable.
 */
interface DropdownState
{
	collapseContent: boolean;
}

/**
 * Composant d'un accordéon dépliable.
 */
export class Dropdown extends React.Component<React.PropsWithChildren<DropdownProperties>, DropdownState>
{
	constructor(props: DropdownProperties)
	{
		super(props);
		if(this.props?.collapsedByDefault){
			this.state = {collapseContent: true};
		} else {
			this.state = {collapseContent: false};
		}
	}

	/**
	 * Méthode d'affichage / compression du contenu.
	 * @protected
	 */
	protected handleCollapseClick()
	{
		// On inverse la propriété de l'état indiquant si le contenu doit être collapsé ou non.
		this.setState({collapseContent: !this.state.collapseContent});
	}

	render()
	{
		// @ts-ignore
		return (
			<div className={`dropdown ${this.state.collapseContent ? "collapsed" : ""}`}>
				<p>
					{(this.state.collapseContent ? "Déplier" : "Replier") + " le contenu"}
					<button className={"collapse-dropdown icon-only"}
									type={"button"}
									onClick={this.handleCollapseClick.bind(this)}
					>
						{this.state.collapseContent ?
							<i className="ri-arrow-down-s-line"></i>
							:
							<i className="ri-arrow-up-s-line"></i>
						}
					</button>
				</p>

				{
					!this.state.collapseContent ?
						<div className={"dropdown-content"}>
							{this.props.children}
						</div>
						:
						<button className={"flat show-content"}
										type={"button"}
										onClick={this.handleCollapseClick.bind(this)}
						>
							{this.props.collapsedContent ? this.props.collapsedContent : "Afficher le contenu"}
						</button>
				}
			</div>

		);
	}
}
