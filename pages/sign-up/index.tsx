import React from "react";
import Head from "next/head";
import { AuthLayout } from "components/layout";
import { SignUpForm } from "components/shared";
import { withLayout } from "components/hocs/withLayout";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
};

export default withLayout(SignUp);
