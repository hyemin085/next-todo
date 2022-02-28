import { NextPage } from "next";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useRef, useState } from "react";
import styles from "./_layout.module.scss";
import { modalAction } from "../../redux/todos/todosSlice";
import { BsPlusCircle } from "react-icons/bs";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import {sideVariants, itemVariants} from "../styles/framer/header-style";
import {useRouter} from "next/router";

const Header: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();


  const isLogin = useAppSelector((state) => state.user.isLoggedIn);
  const userId = useAppSelector((state) => state.user.user.userId);
  const [addTodo, setAddTodo] = useState(false);

  console.log(isLogin)

  const addTodoHandler = () => {
    setAddTodo((addTodo) => !addTodo);
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

  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/login");
  }

  const colors = [
    { value: "yellow" },
    { value: "orange" },
    { value: "purple" },
    { value: "skyblue" },
    { value: "green" },
  ];

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link
            href={{
              pathname: `/todo/${userId}?page=1`,
              query: { slug: userId },
            }}
          >
            <Image src={Logo} width={100} height={100} alt="logo" />
          </Link>
        </div>
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
            <div className={styles.header_signs}>
            <button className="buttons" onClick={logoutHandler}>로그아웃</button>
            </div>
          </>
        )}
        {!isLogin && (
          <>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
