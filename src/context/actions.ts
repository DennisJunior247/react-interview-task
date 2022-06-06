import { create, logIn } from "../services/Auth.service";
import { REQUEST_LOGIN, LOGIN_SUCCESS, ERROR, } from "./types";
import { ToastMessage } from "../utils/toastr";

export async function signup(dispatch: React.Dispatch<any>, signupPayload: {
  email: string,
  password: string,
  fullName: string
  userType: string
}) {
  try {
    const response = await create(signupPayload);
    if (response.data) {
      ToastMessage("SUCCESS", "user successfully created")
      return response;
    }
    return;
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: (error as any)?.response?.data?.message,
    });
    ToastMessage("ERROR", (error as any)?.response?.data?.message,);
  }
}


export async function login(dispatch: React.Dispatch<any>, loginpayload: {
  email: string,
  password: string,
}) {
  try {
    dispatch({ type: REQUEST_LOGIN });
    const response = await logIn(loginpayload);

    if (response.data) {
      dispatch({ type: LOGIN_SUCCESS, payload: response?.data });
      ToastMessage("SUCCESS", "user successfully logged in")
      localStorage.setItem("access_token", response?.data?._id);
      return response;
    }
    return;
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: (error as any)?.response?.data?.message,
    });
    ToastMessage("ERROR", (error as any)?.response?.data?.message,);
  }
}