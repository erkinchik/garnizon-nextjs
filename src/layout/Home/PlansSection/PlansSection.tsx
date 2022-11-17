import React from "react";

import classes from "./PlansSection.module.scss";

import { Button, Divider, notification, Space } from "antd";
import type { NotificationPlacement } from "antd/es/notification";
import { getNoun } from "../../../../utils/getNoun";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { token } from "../../../../utils";
import { IPlans, IPlansFields } from "../../../types/contentful";

const plans = [
  { title: "Стандартный", price: 500, callsQuantity: 1 },
  { title: "Семейный (1+3)", price: 1600, callsQuantity: 5 },
  {
    title: "VIP(1+3)",
    price: 3000,
    callsQuantity: "Без ограничений",
    isPopular: true,
  },
  {
    title: " Коммерческий (Индивидуальный)",
    price: "По договору",
    callsQuantity: "По договору",
  },
];

const PlansSection = ({ plans }: { plans: IPlans[] }) => {
  const sortedPlans = plans?.sort(
    (a, b) =>
      Number(new Date(a.sys.createdAt)) - Number(new Date(b.sys.createdAt))
  );

  const { isAuth } = useAppSelector((s: any) => s.auth);
  const openNotification = () => {
    notification.error({
      message: `Вы не Авторизованы!`,
      description: "Для покупки подписки авторизуйтесь",
      placement: "topLeft",
    });
  };
  const openModal = () => {
    notification.error({
      message: `12122112`,
      description: "21122112",
      placement: "topLeft",
    });
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {sortedPlans?.map(({ fields }: { fields: IPlansFields }) => {
          return (
            <div className={classes.column} key={fields.price}>
              <div className={`${classes.pricingCard} ${classes.basic}`}>
                {fields.isPopular && (
                  <div className={classes.popular}>популярный</div>
                )}
                <div className={classes.pricingHeader}>
                  <span className={classes.planTitle}>{fields.title}</span>
                  {!isNaN(parseInt(fields.price as string)) && (
                    <div className={classes.priceCircle}>
                      <span className={classes.priceTitle}>
                        <span>
                          <small>{fields.price}сом</small>
                        </span>
                      </span>
                    </div>
                  )}
                </div>
                {/*<div className={classes.badgeBox}>*/}
                {/*  <span>Save 35%</span>*/}
                {/*</div>*/}
                <ul>
                  <li>
                    <strong>{fields.callsQuantity}</strong> &nbsp;
                    {!isNaN(parseInt(fields.callsQuantity as string)) &&
                      getNoun(
                        parseInt(fields.callsQuantity as string),
                        "Вызов",
                        "Вызовов",
                        "Вызовов"
                      )}
                  </li>
                </ul>
                <div
                  className={classes.buyButtonBox}
                  onClick={isAuth ? openModal : openNotification}
                >
                  <button className={classes.buyNow}>Купить</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlansSection;
