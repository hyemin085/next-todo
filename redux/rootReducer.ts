import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import todosSlice from "./todos/todosSlice";


const reducer = combineReducers({
    user: userSlice,
    todos: todosSlice,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;