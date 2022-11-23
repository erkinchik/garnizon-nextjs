import React from "react";
import { Alert, Spin } from "antd";
import classes from "./Loader.module.scss";
export const Loader = () => {
  return (
    <div className={classes.loaderBlock}>
      <Spin tip={"Loading..."} />
    </div>
  );
};

