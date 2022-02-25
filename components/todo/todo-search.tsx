import { NextPage } from "next";
import React, {useRef} from "react";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {searchTodo} from "../../redux/todos/todos";
import {AiOutlineSearch} from "react-icons/ai";
import styles from "./_todo.module.scss";
import {useRouter} from "next/router";

const TodoSearch: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const todoSearchHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredSearch = searchInputRef.current.value;
    dispatch(searchTodo({
      search: enteredSearch,
    }))

    router.push({
      pathname:`/todo/search/${enteredSearch}`,
      query: {keyword: enteredSearch}
    })

  };

  return (
    <>
      <form className={styles.todo_search} onSubmit={todoSearchHandler}>
        <label htmlFor="todo-search"><AiOutlineSearch/></label>
          <input type="text" id="todo-search" ref={searchInputRef}/>
      </form>
    </>
  );
};

export default TodoSearch