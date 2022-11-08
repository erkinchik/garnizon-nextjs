import React from "react";
import { AuthLayout, SignUpForm } from "../../components";
import Head from "next/head";

const Index = () => {
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

export default Index;
