import React from "react";
import classes from "./Bar.module.css";

const bar = (props) => {
  return (
    <div
      style={{ height: props.height * 5 + "px" }}
      className={classes.Bar}
    ></div>
  );
};

export default bar;
