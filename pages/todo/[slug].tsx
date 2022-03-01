import { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import {ReactChildren, ReactNode, useEffect, useRef, useState} from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import Todo from "../../components/todo";
import styles from "./_todo.module.scss";
import TodoModal from "../../components/modal/todo-modal";
import TodoSearch from "../../components/todo/todo-search";

export interface Todos {
  contents?: string;
  check?: boolean;
  userId : string;
  commenter?: number;
}

const TodoPage: React.FC<Todos> = () => {
  const router = useRouter();
  const { slug } = router.query;

  const addModal = useAppSelector((state) => state.todos);
  const userName = useAppSelector((state) => state.user.user.userId);

  console.log("헹", userName);

  const isLogin = useAppSelector((state) => state.user.isLoggedIn);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!isLogin || !token ) {
      router.push({
        pathname: `/login`,
      });
    }
  }, [isLogin]);

  return (
    <>
      <div className={styles.todoLayout}>
        {addModal.isTodoModal && <TodoModal items={addModal} />}
        <h1>Todo</h1>
        <TodoSearch />
        <Todo key={userName} userId={userName} />
      </div>
    </>
  );
};

export default TodoPage;
