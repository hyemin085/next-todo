import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {logIn} from "./user";

export interface User {
    userId: string;
    password: string;
}


const initialState = {
    user: <User> {
        userId: '',
        password: '',
    },
}

const userSlice = createSlice({
    name: "user",
    initialState: {

    },
    reducers:{

    }

})


export default userSlice;