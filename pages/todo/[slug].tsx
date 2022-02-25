import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import Todo from "../../components/todo";
import useSWR, { useSWRConfig } from "swr";
import styles from "./_todo.module.scss";
import TodoModal from "../../components/modal/todo-modal";
import TodoSearch from "../../components/todo/todo-search";

interface Todos {
  contents?: string;
  check?: boolean;
  userId?: string;
  commenter?: number;
}

const TodoPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const addModal = useAppSelector((state) => state.todos);

  console.log(addModal, "에드모달");

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(
    `http://3.34.47.186:4000/todo/${slug}`,
    fetcher
  );

  const isLogin = useAppSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (!isLogin) {
      router.push({
        pathname: `/login`,
      });
    }
  }, [isLogin]);

  return (
    <>
      <div className={styles.todoLayout}>
        {addModal.isTodoModal && <TodoModal items={addModal} />}
        <h1>{slug}'s Todo</h1>
        <TodoSearch />
        <Todo userId={slug} items={data && data.todo} />
      </div>
    </>
  );
};

export default TodoPage;
