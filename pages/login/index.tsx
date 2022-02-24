import { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.scss";
import Image from "next/image";
import loginBackground from "../../common/images/loginImage.jpg";
import LoginForm from "../../components/user/login/login-form";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todos</title>
        <meta name="description" content="What I have to do" />
      </Head>
      <div className={styles.loginContainer}>
        <div className={styles.background}>
          <LoginForm />
          <Image src={loginBackground} alt="loginBackground" />
        </div>
      </div>
    </>
  );
};

export default Login;
