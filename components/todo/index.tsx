import { NextPage } from "next";
import useSWR from "swr";
import styles from "./_todo.module.scss";
import { fetcher } from "../../libs/fetch";
import React, { ReactNode, useState } from "react";
import TodoCard from "./todo-card";
import {Todos} from "../../pages/todo/[slug]";

interface ParamProps {
  children: ReactNode;
  userId: any;
}

const Todo: React.FC<Todos> = ({userId}) => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, mutate } = useSWR(
    `http://3.34.47.186:4000/todo/${userId}?page=${pageIndex}`,
    fetcher
    // { refreshInterval: 1000 }
  );

  const todoTotalCount =
    data && Math.ceil(data.countTodo[0].count_contents / 15);
  console.log(todoTotalCount);

  return (
    <>
      <div className={styles.button_layout}>
        {pageIndex < todoTotalCount && (
          <button
            className="buttons"
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            더보기
          </button>
        )}

        {pageIndex > 1 && (
          <button
            className="buttons"
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            뒤로가기
          </button>
        )}
      </div>
      <div className={styles.main_todo}>
        {data &&
          data.todo.map((issue) => {
            return <TodoCard key={issue.id} list={issue} />;
          })}
      </div>
    </>
  );
};

export default Todo;
