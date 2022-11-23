import React from "react";

import classes from "./FeedFormSection.module.scss";

import { Input } from "components/shared";

const FeedFormSection = () => {
  return (
    <section className={classes.feedFormWrapper}>
      <div className={classes.container}>
        <div className={classes.feedFormBlock}>
          <div className={classes.feedFormBlockCol}>
            <h5 className={classes.feedModalTitle}>Эксперт на связи</h5>
            <h6 className={classes.feedModalSubtitle}>
              Подберет решение и ответит на все вопросы
            </h6>
            <form
              action="/universal_form/lead_form/"
              className={classes.feedForm}
            >
              <div className={classes.feedFormGroup}>
                <Input
                  className={classes.feedFormControl}
                  name="name"
                  placeholder="Имя"
                  type="text"
                />
              </div>
              <div className={classes.feedFormGroup}>
                <Input
                  className={classes.feedFormControl}
                  name="phone"
                  placeholder="Телефон"
                  type="tel"
                />
              </div>
              <button className={classes.btn} disabled={true} type="submit">
                Отправить
              </button>
            </form>
            <small className={classes.feedFormConditions}>
              {`Нажимая "Отправить", вы принимаете`}
              <a href="#" target="_blank">
                Условия обработки персональных данных
              </a>
            </small>
          </div>
          <div className={classes.feedFormBlockMan} />
        </div>
      </div>
    </section>
  );
};

export default FeedFormSection;
