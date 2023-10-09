import React, { createContext, useContext, useState, ReactNode } from "react";

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

	const contextValue: StateContextProps = {
		userPseudo,
		setUserPseudo: (pseudo: string) => {
			setUserPseudo(pseudo);
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
