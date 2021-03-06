import React, {useState} from "react";
import { NextPage } from "next";
import styles from "./login-form.module.scss";
import { MailIcon, KeyIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { buttonVariants } from "../../styles/framer/button-style";
import { logIn, signUpDB } from "../../../redux/user/user";
import {useRouter} from "next/router";
import {useAppDispatch} from "../../../redux/hooks/hooks";

const LoginForm: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [enteredId, setEnteredId] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [signUp, setSignUp] = useState<boolean>(false);



  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (enteredId !== "" && enteredPassword !== "" && !signUp) {
      dispatch(
        logIn({
          userId: enteredId,
          password: enteredPassword,
        })
      )
      setEnteredId("");
      setEnteredPassword("");

    } else if (enteredId !== "" && enteredPassword !== "" && signUp) {
      dispatch(
        signUpDB({
          userId: enteredId,
          password: enteredPassword,
        })
      )
    } else {
      alert("아이디나 비밀번호를 정확하게 입력해주세요");
    }
    setEnteredId("");
    setEnteredPassword("");
    console.log(enteredId, enteredPassword);
  };

  return (
    <>
      {signUp ? (
        <div className={styles.loginFormContainer}>
          <h1>회원가입</h1>
          <form onSubmit={submitHandler}>
            <div className={styles.loginInput}>
              <label htmlFor="text">
                <MailIcon className={styles.IconSize} />
                <input
                  type="text"
                  id="text"
                  value={enteredId}
                  placeholder="아이디"
                  onChange={(e) => setEnteredId(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.loginInput}>
              <label htmlFor="password">
                <KeyIcon className={styles.IconSize} />
                <input
                  type="password"
                  id="password"
                  value={enteredPassword}
                  placeholder="비밀번호"
                  onChange={(e) => setEnteredPassword(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.loginInput}>
              <label htmlFor="password">
                <KeyIcon className={styles.IconSize} />
                <input
                  type="password"
                  id="password"
                  value={checkPassword}
                  placeholder="비밀번호확인"
                  onChange={(e) => setCheckPassword(e.target.value)}
                />
              </label>
            </div>
            <button className="buttons">회원가입하기</button>
          </form>

          <button className="buttons"
            onClick={() => {
              setSignUp(false);
            }}
          >
            로그인하기
          </button>
        </div>
      ) : (
        <div className={styles.loginFormContainer}>
          <h1>로그인</h1>
          <form onSubmit={submitHandler}>
            <div className={styles.loginInput}>
              <label htmlFor="text">
                <MailIcon className={styles.IconSize} />
                <input
                  type="text"
                  id="text"
                  value={enteredId}
                  placeholder="아이디"
                  onChange={(e) => setEnteredId(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.loginInput}>
              <label htmlFor="password">
                <KeyIcon className={styles.IconSize} />
                <input
                  type="password"
                  id="password"
                  value={enteredPassword}
                  placeholder="비밀번호"
                  onChange={(e) => setEnteredPassword(e.target.value)}
                />
              </label>
            </div>
            <div>
              <button className="buttons">로그인하기</button>
            </div>
          </form>
          <motion.button
              className="buttons"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => {
              setSignUp(true);
            }}
          >
            회원가입하기
          </motion.button>
        </div>
      )}
    </>
  );
};

export default LoginForm;
