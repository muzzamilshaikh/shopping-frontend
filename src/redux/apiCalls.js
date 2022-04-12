import { publicRequest } from "../requestMethods";
import {
  loginStart,
  loginFailure,
  loginSuccess,
  registerSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(loginFailure());
  }
};
