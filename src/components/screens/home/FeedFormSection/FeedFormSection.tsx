import React from "react";

import classes from "./FeedFormSection.module.scss";

const FeedFormSection = () => {
  return (
    <form>
      <div className={classes.background}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "50px 0 0" }}>
            <h1 style={{ color: "#FFFFFF", fontSize: "200%" }}>
              Эксперт на связи
            </h1>
            <h3 style={{ color: "#FFFFFF", margin: "30px 0" }}>
              Подберет решение и ответит на все вопросы
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <input className={classes.input} type="text" placeholder="Имя" />
              <input
                className={classes.input}
                type="text"
                placeholder="Телефон"
              />
            </div>
          </div>
          <div style={{ margin: 30, position: "relative", right: 30 }}>
            <p style={{ color: "#FFFFFF", opacity: 0.5 }}>
                {'Нажимая "Отправить", вы принимаете ' +
                'Условия обработки персональных данных'}
            </p>
          </div>
          <button type="submit" className={classes.bth}>
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
};

export default FeedFormSection;
