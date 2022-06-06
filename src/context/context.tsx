import React, { createContext, useReducer, useContext, } from "react";
import { initialState, reducer, InitialStateType, } from "./reducer";

interface Props {
  children: JSX.Element
}
const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const AppProvider: React.FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useState() {
  const { state } = useContext(AppContext);

  if (state === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return state;
}

function useDispatch() {
  const { dispatch } = useContext(AppContext);

  if (dispatch === undefined) {
    throw new Error("useAuthState must be used within a AuthProvide");
  }

  return dispatch;
}

export { AppProvider, useDispatch, useState };
