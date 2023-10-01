import React, { createContext, useContext, useState, ReactNode } from "react";

interface StateContextProps {
	userPseudo: string | null;
	setUserPseudo: (pseudo: string) => void;
}

const StateContext = createContext<StateContextProps>({
	userPseudo: null,
	setUserPseudo: () => {},
});

interface ContextProviderProps {
	children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [userPseudo, setUserPseudo] = useState<string | null>(null);

	const contextValue: StateContextProps = {
		userPseudo,
		setUserPseudo: (pseudo: string) => {
			setUserPseudo(pseudo);
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
