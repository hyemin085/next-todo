import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { logIn } from "./user";
import { current } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from '../store';

export interface User {
  userId: string|void;
  password? : string;

}

const initialState: User = {
  userId: "",
};


// function isActionWithStringPayload(
//   action: AnyAction
// ): action is PayloadAction<string> {
//   return typeof action.payload === "number";
// }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.userId = action.payload;
    });
  },
});

export default userSlice;
