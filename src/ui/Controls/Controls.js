import React from "react";
import classes from "./Controls.module.css";

const controls = (props) => {
  return (
    <div className={classes.controls}>
      <button
        onClick={props.sort}
        disabled={props.disabled}
        style={
          props.disabled
            ? { opacity: "0.7", cursor: "not-allowed" }
            : { opacity: "1", cursor: "pointer" }
        }
      >
        Sort
      </button>
      <button
        disabled={!props.disabled}
        style={
          !props.disabled
            ? { opacity: "0.7", cursor: "not-allowed" }
            : { opacity: "1", cursor: "pointer" }
        }
        onClick={props.stop}
      >
        Stop
      </button>
      <span>
        <label>Speed: </label>
        <label>1x</label>
        <input
          type="range"
          step="50"
          min="50"
          max="1000"
          value={1050 - props.speed}
          onChange={props.speedHandler}
          disabled={props.disabled}
          style={
            props.disabled
              ? { opacity: "0.7", cursor: "not-allowed" }
              : { opacity: "1", cursor: "pointer" }
          }
        />
        <label>5x</label>
      </span>
    </div>
  );
};

export default controls;
