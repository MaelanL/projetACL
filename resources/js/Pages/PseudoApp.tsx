import * as React from "react";

export interface PseudoAppProperties
{
	A?: string;
}

export interface PseudoAppState
{

}

export class PseudoApp extends React.Component<PseudoAppProperties,PseudoAppState>
{

	constructor(props: PseudoAppProperties) {
		super(props);

		this.state =
			{
			};
	}

	componentDidMount() {
		console.log(this.props)
	}

	render()
	{

		return (
			<div>
				PseudoApp

			</div>
		)
	}

}

export default PseudoApp;
