import {type PropsWithChildren, useCallback, useMemo} from 'react';
import {createContext, useState} from 'react';

export const SharingContext = createContext({
	count: 0,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	increase() {},
});

export function SharingContextProvider({children}: PropsWithChildren) {
	const [count, setCount] = useState(0);
	const increase = useCallback(() => () => {
		setCount(state => state + 1);
	}, []);

	const contextValue = useMemo(() => ({
		count, increase,
	}), [count, increase]);

	return (
		<SharingContext.Provider value={contextValue}>
			{children}
		</SharingContext.Provider>
	);
}
