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
        <div>
          <label htmlFor="todo-text">오늘의 할일</label>
          {color === "yellow" &&
          <input className={styles.input_yellow} type="text" id="todo-text" ref={textInputRef} />
          }
          {/*<input className={styles.input} type="text" id="todo-text" ref={textInputRef} />*/}
        </div>
        <button>할일 등록하기</button>
      </form>
    </>
  );
};

export default AddTodo;
