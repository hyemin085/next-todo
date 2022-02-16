import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import loginBackground from "../../../common/images/loginImage2.jpg";
import styles from "./login-form.module.scss";
import { MailIcon, KeyIcon } from "@heroicons/react/outline";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { buttonVariants } from "../../framer/button-style";
import {axiosLogin} from "../../../common/api/UserInfo";
import {redirect} from "next/dist/server/api-utils";
import {userTypes} from "../../../model/user.interface";



const LoginForm: NextPage = () => {
  const userIdInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [signUp, setSignUp] = useState<boolean>(false);

  const [value, setValue] = useState<userTypes[]>([]);


  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredId = userIdInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;


    console.log(enteredId, enteredPassword)
    // if(enteredId !== "" && enteredPassword !== "" ){
    //   axiosLogin.getLogin(enteredId, enteredPassword).then((data) =>{
    //         console.log(data);
    //
    //   })
    //   .catch((err) => console.log(err));
    // }

  };

  return (
    <>
      <Image src={loginBackground} alt="loginBackground" />
      {signUp ? (
        <div className={styles.loginFormContainer}>
          <h1>회원가입</h1>
          <form onSubmit={submitHandler}>
            <div className={styles.loginInput}>
              <label htmlFor="text">
                <MailIcon className={styles.IconSize} />
                <input
                  type="email"
                  id="email"
                  ref={userIdInputRef}
                  placeholder="이메일"
                />
              </label>
            </div>
          </form>
          <button>회원가입하기</button>
          <button
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
                  ref={userIdInputRef}
                  placeholder="아이디"
                />
              </label>
            </div>
            <div className={styles.loginInput}>
              <label htmlFor="password">
                <KeyIcon className={styles.IconSize} />
                <input
                  type="password"
                  id="password"
                  ref={passwordInputRef}
                  placeholder="비밀번호"
                />
              </label>
            </div>
            <div>
              <button>로그인하기</button>

            </div>
          </form>
          <motion.button
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
