import type { FC, PropsWithChildren } from "react";
import { createContext, useState } from "react";

export const SharingContext = createContext({
  count: 0,
  increase: () => {},
});

export const SharingContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <SharingContext.Provider value={{ count, increase }}>
      {children}
    </SharingContext.Provider>
  );
};
