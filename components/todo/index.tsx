import { NextPage } from "next";
import useSWR from "swr";
import TodoList from "./todo-list";
import styles from "./todo.module.scss";



const Todo: NextPage = (props: object | string | void ) => {

    console.log(typeof(props.items))
  return (
    <>
      <div>
        {props.items && props.items.map((list) => (
          <TodoList key={list.id} list={list}/>
        ))}
      </div>
    </>
  );
};

export default Todo;
