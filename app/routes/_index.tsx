import { useHydrated } from "~/hooks/use-hydrated";

import LegacyMain from "../lagacy/main";

export default function Index() {
  return useHydrated() ? <LegacyMain /> : <div />;
}
