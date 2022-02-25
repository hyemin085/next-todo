import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useRef, useState } from "react";
import styles from "./_layout.module.scss";
import { modalAction } from "../../redux/todos/todosSlice";
import { BsPlusCircle } from "react-icons/bs";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";

const Header: NextPage = () => {
  const dispatch = useAppDispatch();

  const isLogin = useAppSelector((state) => state.user.isLoggedIn);
  const userId = useAppSelector((state) => state.user.user.userId);

  console.log(userId);

  const [addTodo, setAddTodo] = useState(false);

  const addTodoHandler = () => {
    setAddTodo((addTodo) => !addTodo);
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  //
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const selectColorHandler = (e) => {
    console.log(e.target.value);
    dispatch(
      modalAction({
        isTodoModal: true,
        colors: e.target.value,
      })
    );
  };

  const colors = [
    { value: "yellow" },
    { value: "orange" },
    { value: "purple" },
    { value: "skyblue" },
    { value: "green" },
  ];

  return (
    <>
      <div>
        <Link
          href={{
            pathname: `/todo/${userId}`,
            query: { slug: userId },
          }}
        >
          <h1>Logo</h1>
        </Link>
        {/*로그인 후 todo등록시 todolist 색지정 */}
        {isLogin && (
          <>
            <AnimatePresence>
              <BsPlusCircle
                onClick={addTodoHandler}
                className={styles.add_button}
                size={24}
              />
              {addTodo && (
                <>
                  <motion.div
                    className={styles.add_color}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                  >
                    {colors.map(({ value }) => (
                      <>
                        <motion.button
                          value={value}
                          onClick={selectColorHandler}
                          whileTap={{ scale: 0.5 }}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.1 }}
                          variants={itemVariants}
                        />
                      </>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </>
        )}
        {!isLogin && (
          <>
            <div>
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
