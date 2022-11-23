import React, { useEffect } from "react";
import { AuthLayout } from "components/layout";
import { useAppSelector } from "hooks/useAppSelector";
import { useRouter } from "next/router";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useCookies } from "react-cookie";
import { allCookies } from "services/cookies";
import Head from "next/head";
import { LoginForm } from "components/shared";
import { withLayout } from "components/hocs/withLayout";

const Login = () => {
  const { user, isAuth } = useAppSelector((s) => s.auth);
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Авторизация</title>
      </Head>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
};

export default withLayout(Login);
