import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import Api from "../../common/api/Api";
import {User} from "./userSlice";


axios.defaults.withCredentials = true;

export const logIn = createAsyncThunk(
    "user/login",
    async (data: User, {rejectWithValue}) => {
        console.log(data);
        try {
            const res = await Api({
                url: 'auth/login',
                method: 'POST',
                data: {
                    userId: data.userId,
                    password: data.password,
                }
            }).then(res => {
                const accessToken = res.data.token;
                localStorage.setItem("token", accessToken);
            })
        } catch (error) {
            console.log(error);
            return;
        }
    }
);

export const signUpDB = createAsyncThunk(
    "user/signUp",
    async (data: User, thunkAPI) => {
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