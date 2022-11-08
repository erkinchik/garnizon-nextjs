import React, { FC, useEffect } from "react";
import classes from "./AuthForms.module.scss";
import Link from "next/link";
import { Button, Checkbox, Form, Input } from "antd";
import { HOME_PAGE, REGISTRATION_PAGE } from "../../../routes/path";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useRouter } from "next/router";
import { fetchLogin, fetchUserInfo } from "../../../store/slices/authSlice";
import { useCookies } from "react-cookie";
import { allCookies } from "../../../services/cookies";
import { Loader } from "../../index";

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuth, token, loading } = useAppSelector((state) => state.auth);
  const [cookies, setCookie, removeCookie] = useCookies(allCookies);
  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth, router]);

  if (loading) {
    return <Loader />;
  }

  const onFinish = (values: any) => {
    dispatch(fetchLogin(values)).then((res) => {
      if (!res.hasOwnProperty("error")) {
        setCookie("accessToken", res.payload);
      }
      dispatch(fetchUserInfo(res.payload)).then((res) => {
        if (!res.hasOwnProperty("error")) {
          setCookie("user", JSON.stringify(res.payload));
        }
      });
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={classes.login}>
      {/*<div className={classes.loginHeader}>*/}
      {/*  <Link to={HOME_PAGE}>LOGO</Link>*/}
      {/*</div>*/}

      <Form
        className={classes.loginForm}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Укажите адрес Эл. Почты!" }]}
        >
          <Input placeholder="Эл. почта" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Заполните Пароль!" }]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <div className={classes.rememberPass}>
          <Form.Item
            className={classes.remember}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
          <Link className={classes.forgotPass} href={"/404"}>
            Забыли Пароль?
          </Link>
        </div>

        <Form.Item wrapperCol={{ offset: 5 }}>
          <Button className={classes.btn} type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>

      <Link className={classes.createAccount} href={REGISTRATION_PAGE}>
        Создать учетную запись
      </Link>
    </div>
  );
};

export default LoginForm;
