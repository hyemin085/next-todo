import React, {useRef} from "react";
import {useAppSelector} from "../../redux/hooks/hooks";
import {addTodo} from "../../redux/todos/todos";
import {AppDispatch} from "../../redux/store";
import {useDispatch} from "react-redux";
import {useSWRConfig} from "swr";
import {modalAction} from "../../redux/todos/todosSlice";
import styles from "./_add-todo.module.scss";


const AddTodo: React.FC<{color: string|null}> = (props) => {

  const userId = useAppSelector(state=> state.user.user.userId);
  const userNumber = useAppSelector(state=> state.user.user.commenter.id);
  const textInputRef = useRef<HTMLInputElement>(null);
  const dispatch : AppDispatch = useDispatch();
  const {mutate} = useSWRConfig();
  const color= props.color;

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    dispatch(addTodo({
      contents: enteredText,
      userId: userId,
      check: false,
      commenter: userNumber,
      color: color,
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
        <div className={styles.add_todo}>
          <label htmlFor="todo-text"/>
          {color === "yellow" &&
          <textarea className={styles.input_yellow} type="text" id="todo-text" ref={textInputRef} />
          }
          {color === "orange" &&
          <textarea className={styles.input_orange} type="text" id="todo-text" ref={textInputRef} />
          }
          {color === "purple" &&
          <textarea className={styles.input_purple} type="text" id="todo-text" ref={textInputRef} />
          }
          {color === "skyblue" &&
          <textarea className={styles.input_skyblue} type="text" id="todo-text" ref={textInputRef} />
          }
          {color === "green" &&
          <textarea className={styles.input_green} type="text" id="todo-text" ref={textInputRef} />
          }
          {/*<input className={styles.input} type="text" id="todo-text" ref={textInputRef} />*/}
        </div>
        <button className="buttons">할일 등록하기</button>
      </form>
    </>
  );
};

export default AddTodo;
