import React from "react";
import { Alert, Spin } from "antd";

import classes from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={classes.loaderBlock}>
      <Spin tip={"Loading..."} />
    </div>
  );
};

export default Loader;
