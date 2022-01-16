import React, { createContext, useContext, useReducer } from "react";
import initial from './initialStore.json';
import { EcomReducer } from "./reducer";

const initialConfig = initial;
const EcomContext = createContext(initialConfig);

export const useEcom = () => useContext(EcomContext);
type ComponentProps = React.PropsWithChildren<{}>;


export const EcomProvider = ({ children }: ComponentProps) => {
  const [state, dispatch] = useReducer(EcomReducer, initialConfig);
  return (
    <EcomContext.Provider value={{ state, dispatch }}>
      {children}
    </EcomContext.Provider>
  );
};
