import React, {useEffect} from 'react';
import {AuthLayout, LoginForm} from "../../components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useRouter} from "next/router";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useCookies} from "react-cookie";
import {allCookies} from "../../services/cookies";
import Head from "next/head";

const Index = () => {
    const { user, isAuth } = useAppSelector((s) => s.auth);
    const { asPath } = useRouter();


    return (
        <>
            <Head>
                <title>Авторизация</title>
            </Head>
            <AuthLayout>
                <LoginForm/>
            </AuthLayout>
        </>
    );
};

export default Index;