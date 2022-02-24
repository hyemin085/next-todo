import { NextPage } from "next";
import useSWR from "swr";
import TodoCard from "./todo-card";
import styles from "./_todo.module.scss";





const Todo: NextPage = (props: object | string | void ) => {

    console.log(typeof(props.items))
  return (
    <>
      <div className={styles.main_todo}>
        {props.items && props.items.map((list) => (
          <TodoCard key={list.id} list={list}/>
        ))}
      </div>
    </>
  );
};

export default Todo;
