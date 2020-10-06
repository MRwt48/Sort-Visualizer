import React, { Component } from "react";
import Bar from "../../component/Bar/Bar";
import classes from "./SortApp.module.css";

class SortApp extends Component {
  state = {
    unsorted: [],
    len: 5,
  };

  componentDidMount() {
    this.generateArrHandler();
  }
  generateArrHandler = () => {
    const ranArr = [];
    for (let i = 0; i < this.state.len; i++) {
      ranArr.push(Math.floor(Math.random() * 100 + 10));
    }
    this.setState({ unsorted: [...ranArr] });
  };

  sortArrHandler = () => {
    const sorted = [...this.state.unsorted];
    sorted.sort(function (a, b) {
      return a - b;
    });
    this.setState({ unsorted: [...sorted] });
  };

  lengthHandler = ({ target }) => {
    this.setState({ len: target.value }, () => this.generateArrHandler());
  };

  render() {
    const bars = this.state.unsorted.map((val, key) => {
      return <Bar key={key} height={val} />;
    });
    return (
      <React.Fragment>
        <div className={classes.sortDiv}>
          {bars}
          <button onClick={this.generateArrHandler}>Generate</button>
          <button onClick={this.sortArrHandler}>Sort</button>
        </div>
        <input
          type="range"
          step="1"
          min="5"
          max="40"
          style={{ width: "200px" }}
          value={this.state.len}
          onChange={this.lengthHandler}
        />
      </React.Fragment>
    );
  }
}

export default SortApp;
