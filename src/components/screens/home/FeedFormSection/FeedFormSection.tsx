import React, {useEffect, useState} from "react";

import classes from "./FeedFormSection.module.scss";
import {Input} from "components/shared";

const FeedFormSection = () => {

    const [click, setClick] = useState<boolean>(true)
    const [text, setText] = useState('')
    const [phone, setPhone] = useState('')

    const textHandle = (e: any) => {
        setText(e.target.value)
    }

    const phoneHandle = (e: any) => {
        setPhone(e.target.value)
    }
    useEffect(() => {
        if (text && phone) {
            setClick(false)
        } else {
            setClick(true)
        }
    }, [text, phone])

    return (
        <div className={classes.background}>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",}}>
                <div className={classes.div}>
                    <form
                        action="/universal_form/lead_form/"
                        className={classes.feedForm}
                    >
                        <div className={classes.feedFormGroup}>
                            <Input
                                className={classes.feedFormControl}
                                name="name"
                                placeholder="Имя"
                                type='text'
                                value={text}
                                onChange={(e: any) => textHandle(e)}
                            />
                        </div>
                        <div className={classes.feedFormGroup}>
                            <Input
                                className={classes.feedFormControl}
                                name="phone"
                                placeholder="Телефон"
                                type='tel'
                                value={phone}
                                onChange={(e: any) => phoneHandle(e)}
                            />
                        </div>
                        <small className={classes.feedFormConditions}>
                            {`Нажимая "Отправить", вы принимаете `} <br/>
                            <a href="#" target="_blank">
                                Условия обработки персональных данных
                            </a>
                        </small>
                        <button className={classes.btn} disabled={click} type="submit">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FeedFormSection;
