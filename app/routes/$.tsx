import {useHydrated} from '~/hooks/use-hydrated';

import LegacyMain from '../legacy/main';

export default function Index() {
	return useHydrated() ? <LegacyMain/> : <div/>;
}
