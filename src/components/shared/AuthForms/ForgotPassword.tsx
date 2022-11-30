import React from 'react';
import {Button, Form, Input} from "antd";
import classes from "components/shared/AuthForms/AuthForms.module.scss";

export const ForgotPassword = () => {
    return (
        <div>
            <Form
                className={classes.signUpForm}
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
            >
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
                <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button className={classes.btn} type="primary" htmlType="submit">
                        Восстановить пароль
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

