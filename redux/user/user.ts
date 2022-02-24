import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../common/api/Api";
import { userTypes } from "../types/redux.interface";

axios.defaults.withCredentials = true;

export const logIn = createAsyncThunk(
    "user/login",
    async (user: userTypes) => {
        try {
            return await Api({
              url: "auth/login",
              method: "POST",
              data: {
                userId: user.userId,
                password: user.password,
              },
            }).then((res) => {
              const accessToken = res.data.token;
              localStorage.setItem("token", accessToken);

              if (res.data.ok) {
                console.log(res.data);
              }
              return res.data
            });
        } catch (error) {
            console.log(error);
            return;
        }
    }
);

export const signUpDB = createAsyncThunk(
    "user/signUp",
    async (data: userTypes, thunkAPI) => {
        console.log("singUp", data);
        try {
            const res = await Api({
                url: 'auth/signup',
                method: 'POST',
                data: {
                    userId: data.userId,
                    password: data.password,
                }
            }).then(res => {
                console.log(res)
            })
        } catch (error) {
            console.log(error);
            return;
        }
    }
);