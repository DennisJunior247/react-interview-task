import { REQUEST_LOGIN, LOGIN_SUCCESS, ERROR } from "./types";

export type InitialStateType = {
  user: object
  loading: boolean,
  errorMessage: string,
  token: string | null,
}

export const initialState: InitialStateType = {
  user: {},
  loading: false,
  errorMessage: "",
  token: "",
};

export type ACTIONTYPE =
  | { type: "REQUEST_LOGIN"; payload: boolean }
  | { type: "LOGIN_SUCCESS"; payload: { user: object } }
  | { type: "ERROR"; payload: string }

export const reducer = (state: InitialStateType, action: ACTIONTYPE): InitialStateType => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: localStorage.getItem("access_token"),
      };
    case ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return {
        ...state
      };
  }
};

