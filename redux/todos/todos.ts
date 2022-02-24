import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../common/api/Api";
import { addTodoTypes } from "../types/user.interface";
import {create} from "domain";

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (data: addTodoTypes) => {
    console.log("getTodo", data);
    try {
      const res = await Api({
        url: `/todo/${data.userId}`,
        method: "POST",
        data: {
            check: data.check,
            commenter: data.commenter,
            contents: data.contents,
            userId: data.userId,
        },
      });
      if (res.data.ok) {
        console.log(res.data);
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);


export const checkBox = createAsyncThunk(
    "todos/checkBox",
    async(data:addTodoTypes) => {
        console.log(data);

        try {
            const res = await Api({
                url: `/todo/${data.id}`,
                method: "PUT",
                data: {
                    check: data.check,
                }
            })
            if (res.data.ok) {
                console.log(res.data);
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    }
);
