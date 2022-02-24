import { NextPage } from "next";
import styles from "./_modal.module.scss";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { modalAction } from "../../redux/todos/todosSlice";
import AddTodo from "../todo/add-todo";

const TodoModal: NextPage = (props) => {
  const dispatch = useAppDispatch();

  console.log("토탈모달", props.items.colors);

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
                <AddTodo/>
            </div>
          )}
          {props.items.colors === "orange" && (
            <div className={styles.orange}>헹구</div>
          )}
          {props.items.colors === "purple" && (
            <div className={styles.purple}>헹구</div>
          )}
          {props.items.colors === "skyblue" && (
            <div className={styles.skyblue}>헹구</div>
          )}
          {props.items.colors === "green" && (
            <div className={styles.green}>헹구</div>
          )}
        </div>
      </div>
      <div className={styles.overlay} onClick={outSideHandler} />
    </>
  );
};

export default TodoModal;
