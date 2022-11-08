import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

import Link from "next/link";
import classes from "./AuthForms.module.scss";
import {
  ERROR_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
} from "../../../routes/path";
import { Button, Checkbox, Form, Input } from "antd";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchRegister } from "../../../store/slices/authSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const { isRegister } = useAppSelector((s) => s.auth);
  const [agreement, setAgreement] = useState(null);
  const router = useRouter();

  const onFinish = (values: any) => {
    if (values.password !== values.passwordRepeat) {
      alert("Пароли не совпадают");
    } else {
      delete values.passwordRepeat;
      dispatch(fetchRegister({ agreement, ...values })).then(() => {
        if (isRegister) {
          router.push(LOGIN_PAGE);
        }
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={classes.signUp}>
      {/*<div className={classes.signUpHeader}>*/}
      {/*  <Link to={HOME_PAGE}>LOGO</Link>*/}
      {/*</div>*/}

      <Form
        className={classes.signUpForm}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Укажите своё имя!" }]}
        >
          <Input placeholder="Имя" />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Укажите свою фамилию!" }]}
        >
          <Input placeholder="Фамилия" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Укажите адрес Эл. Почты!" }]}
        >
          <Input placeholder="Эл. почта" />
        </Form.Item>
        <Form.Item
          name="secretWord"
          rules={[{ required: true, message: "Придумайте секретное слово!" }]}
        >
          <Input placeholder="Придумайте секретное слово" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Укажите номер телефона в формате +996*********!",
            },
          ]}
        >
          <Input placeholder="Номер Телефона  +996*********" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Заполните Пароль!" }]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item
          name="passwordRepeat"
          rules={[{ required: true, message: "Повторите Пароль!" }]}
        >
          <Input.Password placeholder="Повторите Пароль" />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={(e: any) => setAgreement(e.target.checked)}>
            Пользовательское соглашение
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 0 }}>
          <Button className={classes.btn} type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>

      <Link className={classes.createAccount} href={LOGIN_PAGE}>
        Есть учетная запись? Войти.
      </Link>
    </div>
  );
};

export default SignUpForm;
