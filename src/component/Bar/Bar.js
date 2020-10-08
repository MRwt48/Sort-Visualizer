import React from "react";
import classes from "./Bar.module.css";

const bar = (props) => {
  return (
    <div
      style={{
        height: props.height * 5 + "px",
        backgroundColor:
          props.color === 1
            ? "rgb(175, 40, 6)"
            : props.color === 0
            ? "rgb(6, 175, 147)"
            : "rgb(164, 175, 6)",
      }}
      className={classes.Bar}
    ></div>
  );
};

export default bar;
