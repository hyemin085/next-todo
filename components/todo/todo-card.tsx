import { NextPage } from "next";
import { useState } from "react";
import Api from "../../common/api/Api";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { checkBox } from "../../redux/todos/todos";
import styles from "./_todo.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { motion } from "framer-motion";

interface listType {
  list: {
    id?: number;
    contents?: string;
    check?: boolean;
    userId?: string;
    commenter?: number;
    color?: string;
  };
}

const TodoCard: NextPage<listType> = (props) => {
  const dispatch = useAppDispatch();

  const [checking, setChecking] = useState(props.list.check);

  console.log("리스트", props);

  const checkingHandler = () => {
    setChecking((checking) => !checking);
    //checking값이 바로하면 false, true가 반대로 나오는 경우의 수 때문에 따로 나눠줌.
    if (checking) {
      dispatch(
        checkBox({
          id: props.list.id,
          check: false,
        })
      );
    } else {
      dispatch(
        checkBox({
          id: props.list.id,
          check: true,
        })
      );
    }
  };

  const deleteHandler = () => {
    Api.delete(`/todo/${props.list.id}`).then((res) => console.log(res));
  };

  return (
    <>
      <motion.div className={styles.todo_list}  whileHover={{ scale: 1.1, opacity: 1.0 }}>
        {props.list.color === "yellow" && (
          <div className={styles.todo_yellow}>
            <input
              type="checkbox"
              checked={checking}
              onChange={checkingHandler}
            />
            <div
              className={checking ? styles.todo_check : styles.todo_nonCheck}
            >
              {props.list.contents}
            </div>
            <AiOutlineDelete
              className={styles.delete}
              onClick={deleteHandler}
              size={25}
            />
          </div>
        )}
        {props.list.color === "orange" && (
          <div className={styles.todo_orange}>
            <input
              type="checkbox"
              checked={checking}
              onChange={checkingHandler}
            />
            <div
              className={checking ? styles.todo_check : styles.todo_nonCheck}
            >
              {props.list.contents}
            </div>
            <AiOutlineDelete onClick={deleteHandler} size={25} />
          </div>
        )}
        {props.list.color === "purple" && (
          <div className={styles.todo_purple}>
            <input
              type="checkbox"
              checked={checking}
              onChange={checkingHandler}
            />
            <div
              className={checking ? styles.todo_check : styles.todo_nonCheck}
            >
              {props.list.contents}
            </div>
            <AiOutlineDelete onClick={deleteHandler} size={25} />
          </div>
        )}
        {props.list.color === "skyblue" && (
          <div className={styles.todo_skyblue}>
            <input
              type="checkbox"
              checked={checking}
              onChange={checkingHandler}
            />
            <div
              className={checking ? styles.todo_check : styles.todo_nonCheck}
            >
              {props.list.contents}
            </div>
            <AiOutlineDelete onClick={deleteHandler} size={25} />
          </div>
        )}
        {props.list.color === "green" && (
          <div className={styles.todo_green}>
            <input
              type="checkbox"
              checked={checking}
              onChange={checkingHandler}
            />
            <div
              className={checking ? styles.todo_check : styles.todo_nonCheck}
            >
              {props.list.contents}
            </div>
            <AiOutlineDelete onClick={deleteHandler} size={25} />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default TodoCard;
