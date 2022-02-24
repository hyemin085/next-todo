import { NextPage } from "next";
import React, {useRef} from "react";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {searchTodo} from "../../redux/todos/todos";

const TodoSearch: NextPage = () => {
  const dispatch = useAppDispatch();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const todoSearchHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredSearch = searchInputRef.current.value;
    dispatch(searchTodo({
      search: enteredSearch,
    }))


  };

  return (
    <>
      <form onSubmit={todoSearchHandler}>
        <label htmlFor="todo-search">검색</label>
          <input type="text" id="todo-search" ref={searchInputRef}/>
        <button>등록</button>
       
      </form>
    </>
  );
};

export default TodoSearch