import * as React from 'react';

export type ClientStyleContextData = {
	reset: () => void;
};

export default React.createContext<ClientStyleContextData>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	reset() {},
});
