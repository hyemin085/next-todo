import { NextPage } from "next";
import Head from "next/head";
import styles from "./_index.module.scss";
import Image from "next/image";
import loginBackground from "../../common/images/loginImage.jpg";
import LoginForm from "../../components/user/login/login-form";
import { useEffect, useState } from "react";
import { MainLogoFramer } from "../../components/styles/framer/mainlogo-framer";
import { MainLogo } from "../../components/styles/framer/main-logo";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const user = useAppSelector((state) => state.user.user.userId);
  const token = localStorage.getItem("token");
  console.log(user);

  useEffect(() => {
    if (token) {
      router.push({
        pathname: `/todo/[slug]`,
        query: { slug: user },
      });
    }
  }, [user]);
  return (
    <>
      <Head>
        <title>Todos</title>
        <meta name="description" content="What I have to do" />
      </Head>
      <div className={styles.loginContainer}>
        <div className={styles.background}>
          <div>
            <LoginForm />
          </div>

          <div className={styles.framerStyle}>
            <MainLogo key={count} />
            <MainLogoFramer onClick={() => setCount(count + 1)} />
            <a>오늘할일</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
