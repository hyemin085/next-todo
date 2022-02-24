import {
  createAsyncThunk,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { logIn } from "./user";
import { current } from "@reduxjs/toolkit";

interface Users {
  user?: any;
  isLoggedIn?: boolean;
}

const initialState: Users = {
  isLoggedIn: false,
  user: {},
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    }),
});

export default UserSlice.reducer;
