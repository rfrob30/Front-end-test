import React, { Dispatch, useReducer } from "react";
import { Actions, State, reducer, initState } from "./Reducer";

interface ContextProps {
  state: State;
  dispatch: Dispatch<Actions>;
}

export const Store = React.createContext({} as ContextProps);

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>{props.children}</Store.Provider>
  );
}
