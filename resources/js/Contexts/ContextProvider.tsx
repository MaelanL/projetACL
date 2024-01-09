import React, {createContext, useContext, useState, ReactNode, useEffect, useLayoutEffect} from "react";
import BeloteChallengeGame from "@/Models/BeloteChallengeGame";

interface StateContextProps {
	userPseudo: string | null;
	setUserPseudo: (pseudo: string) => void;

	gameSelected: string | null;
	setGameSelected: (gameSelected: string) => void;
}

const StateContext = createContext<StateContextProps>({
	userPseudo: null,
	setUserPseudo: () => {},

	gameSelected: null,
	setGameSelected: () => {},
});

interface ContextProviderProps {
	children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [userPseudo, setUserPseudo] = useState<string | null>(null);
	const [gameSelected, setGameSelected] = useState<string | null>(null);

	// useEffect(() => {
	// 	console.log("useeffect")
	// 	const data = window.localStorage.getItem('STORE_PSEUDO');
	// 	if ( data !== null ) {
	// 		console.log(userPseudo)
	// 		setUserPseudo(data)
	// 		console.log(data)
	// 	}
	// }, []);

	useLayoutEffect(() => {
		console.log("useeffect")
		const data = window.localStorage.getItem('STORE_PSEUDO');
		if ( data !== null ) {
			console.log(userPseudo)
			setUserPseudo(data)
			console.log(data)
		}
	}, []);

	const getPseudo= () => {
		return window.localStorage.getItem('STORE_PSEUDO');
	}

	const contextValue: StateContextProps = {
		userPseudo,
		setUserPseudo: (pseudo: string) => {
			setUserPseudo(pseudo);
			window.localStorage.setItem('STORE_PSEUDO',pseudo);
		},

		gameSelected,
		setGameSelected: (gameSelected: string) => {
			setGameSelected(gameSelected);
		},

	};


	return (
		<StateContext.Provider value={contextValue}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = (): StateContextProps => {
	return  useContext(StateContext);
};
