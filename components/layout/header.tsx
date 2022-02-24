import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import SwitchButton from "../styles/switch-button";
import { useRef, useState } from "react";
import styles from "./layout.module.scss";
import { modalAction } from "../../redux/todos/todosSlice";

const Header: NextPage = () => {
  const dispatch = useAppDispatch();

  const isLogin = useAppSelector((state) => state.user.isLoggedIn);
  const [addTodo, setAddTodo] = useState(false);

  const addTodoHandler = () => {
    setAddTodo((addTodo) => !addTodo);
  };
  
  const selectColorHandler = (e) => {
    dispatch(
      modalAction({
        isTodoModal: true,
        colors: e.target.value,
      })
    );
  };

  return (
    <>
      <div>
        <h1>Logo</h1>
          
          {/*로그인 후 todo등록시 todolist 색지정 */}
        {isLogin && (
          <>
            <button onClick={addTodoHandler}>새로운 할일 저장</button>
            {addTodo && (
              <>
                <div className={styles.add_color}>
                  <button value={"yellow"} onClick={selectColorHandler} />
                  <button value={"orange"} onClick={selectColorHandler} />
                  <button value={"purple"} onClick={selectColorHandler} />
                  <button value={"skyblue"} onClick={selectColorHandler} />
                  <button value={"green"} onClick={selectColorHandler} />
                </div>
              </>
            )}
          </>
        )}
        {!isLogin && (
          <>
            <div>
              {/*<SwitchButton/>*/}
              <div>로그인</div>
              <div>로그아웃</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
