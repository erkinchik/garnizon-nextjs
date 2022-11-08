import React from "react";
import classes from "./HistoryCard.module.scss";
import { Card, Rate } from "antd";
import { ItemType } from "../../types/type";

const signals = {
  0: "PENDING",
  1: "ACTIVE",
  2: "DELETED",
  3: "BANNED",
  5: "COMPLETED",
};

type HistoryCardProps = {
  item: ItemType;
};


const HistoryCard:React.FC<HistoryCardProps>  = ({item}) => {
  return (
    <Card className={classes.historyCard}>
      <div className={classes.historyCardInner}>
        <div className={classes.info}>
          <h3>
            {`Сигнал от ${item?.user?.firstName} ${item?.user?.lastName}. Статус `}
            <span style={{ color: signals[1] === "DELETED" ? "red" : "green" }}>
              {signals[5]}
            </span>
            <br />
            <br />
            <span>{`Принял вызов -  ${item?.guard?.firstName} ${item?.guard?.lastName} `}</span>
          </h3>
        </div>

        <div>
          <p
            style={{ marginTop: "10px" }}
          >{`Дата и время -  ${new Date(item?.createDate).toLocaleString()}`}</p>
          <Rate disabled={true} count={5} value={item?.rate} />
        </div>
      </div>
    </Card>
  );
};

export default HistoryCard;
