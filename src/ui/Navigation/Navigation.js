import React from "react";
import classes from "./Navigation.module.css";

const navigation = (props) => {
  return (
    <React.Fragment>
      <div className={classes.nav}>
        <span className={classes.heading}>Sort Visualizer</span>

        <span>
          <label>Size of Array:&nbsp;&nbsp;&nbsp;</label>
          <label>5</label>
          <input
            type="range"
            step="1"
            min="5"
            max="100"
            style={{ width: "200px" }}
            value={props.len}
            onChange={props.lenHandler}
          />
          <label>100</label>
        </span>
        <button
          onClick={props.randomize}
          disabled={props.disabled}
          style={
            props.disabled
              ? { opacity: "0.7", cursor: "not-allowed" }
              : { opacity: "1", cursor: "pointer" }
          }
        >
          Randomize Array
        </button>
      </div>
    </React.Fragment>
  );
};

export default navigation;
