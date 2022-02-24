import { NextPage } from "next";
import React, {ReactNode, useRef} from "react";
import axios from "axios";
import Api from "../../common/api/Api";
import {logIn} from "../../redux/user/user";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {addTodo} from "../../redux/todos/todos";
import {AppDispatch} from "../../redux/store";
import {useDispatch} from "react-redux";
import {useSWRConfig} from "swr";
import {modalAction} from "../../redux/todos/todosSlice";


const AddTodo: React.FC = (props) => {

  const userId = useAppSelector(state=> state.user.user.userId);
  const userNumber = useAppSelector(state=> state.user.user.commenter.id);
  const textInputRef = useRef<HTMLInputElement>(null);
  const dispatch : AppDispatch = useDispatch();
  const {mutate} = useSWRConfig();

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    dispatch(addTodo({
      contents: enteredText,
      userId: userId,
      check: false,
      commenter: userNumber,
      color: props.color,
    }))
    dispatch(modalAction({
      isTodoModal: false,
      colors: "",
    }))
    mutate(`http://3.34.47.186:4000/todo/${userId}`)
  };

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div>
          <label htmlFor="todo-text">오늘의 할일</label>
          <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button>할일 등록하기</button>
      </form>
    </>
  );
};

export default AddTodo;
