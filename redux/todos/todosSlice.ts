import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {searchTodo} from "./todos";

interface TodoTypes {
    isTodoModal: boolean;
    colors: string;
}

const initialState: TodoTypes = {
    isTodoModal: false,
    colors: null,
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      modalAction(state:TodoTypes, action:PayloadAction<TodoTypes>) {
          if(state.isTodoModal){
              state.isTodoModal = false;
          }else{
              state.isTodoModal = true;
          }
          state.colors = action.payload.colors
          console.log("페이로드",action.payload)
      }
    },
    // extraReducers: (builder) =>
    //     builder.addcase(searchTodo.fulfilled, (state, action) => {
    //
    //     }),



});


export const {modalAction} = todosSlice.actions;
export default todosSlice.reducer;