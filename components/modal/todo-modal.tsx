import { NextPage } from "next";
import styles from "./_modal.module.scss";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import { modalAction } from "../../redux/todos/todosSlice";
import AddTodo from "../todo/add-todo";

const TodoModal: NextPage = (props) => {
  const dispatch = useAppDispatch();

  const todoColors = useAppSelector(state=>state.todos.colors);


  const outSideHandler = () => {
    dispatch(
      modalAction({
        isTodoModal: false,
        colors: "",
      })
    );
  };

  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.todo_modal}>
          {props.items.colors === "yellow" && (
            <div className={styles.yellow}>
                <AddTodo color={todoColors} />
            </div>
          )}
          {props.items.colors === "orange" && (
            <div className={styles.orange}>
                <AddTodo color={todoColors} />
            </div>
          )}
          {props.items.colors === "purple" && (
            <div className={styles.purple}>
                <AddTodo color={todoColors} />
            </div>
          )}
          {props.items.colors === "skyblue" && (
            <div className={styles.skyblue}>
                <AddTodo color={todoColors} />
            </div>
          )}
          {props.items.colors === "green" && (
            <div className={styles.green}>
                <AddTodo color={todoColors} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default TodoModal;
