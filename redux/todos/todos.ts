import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../common/api/Api";
import {addTodoTypes, searchTodoTypes} from "../types/redux.interface";
import {create} from "domain";

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (data: addTodoTypes) => {
    console.log(data);
    try {
      const res = await Api({
        url: `/todo/${data.userId}`,
        method: "POST",
        data: {
            check: data.check,
            commenter: data.commenter,
            contents: data.contents,
            userId: data.userId,
            color: data.color,
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

export const searchTodo = createAsyncThunk(
    "todos/searchTodo",
    async(data:searchTodoTypes) => {
        console.log(data);
        try {
            const res = await Api({
                url:`/search?contents=${data.search}`,
                method:"GET",
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
