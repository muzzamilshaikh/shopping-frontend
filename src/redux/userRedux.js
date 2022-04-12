import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    newUserCreated: false,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.newUserCreated = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  registerSuccess,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
