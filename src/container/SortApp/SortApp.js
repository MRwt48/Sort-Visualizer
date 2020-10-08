import React, { Component } from "react";
import Bar from "../../component/Bar/Bar";
import classes from "./SortApp.module.css";
import Controls from "../../ui/Controls/Controls";

class SortApp extends Component {
  state = {
    unsorted: [],
    len: 5,
    ind: 0,
    changedWith: -1,
    speed: 50,
    disabled: false,
    interval: () => {},
  };

  componentDidMount() {
    this.generateArrHandler();
  }

  componentDidUpdate(prev) {
    if (prev.len !== this.props.len) {
      this.setState({ len: this.props.len }, () => {
        this.generateArrHandler();
      });
    }
    if (this.props.randomize) {
      this.props.randomizeHandler();
      this.generateArrHandler();
    }
  }

  generateArrHandler = () => {
    const ranArr = [];
    for (let i = 0; i < this.state.len; i++) {
      ranArr.push(Math.floor(Math.random() * 100 + 10));
    }
    this.setState({ unsorted: [...ranArr], ind: 0, changedWith: -1 });
  };

  selectionSortHandler = () => {
    const sorted = [...this.state.unsorted];
    let min,
      i = this.state.ind;
    if (this.state.ind >= parseInt(this.state.len)) {
      clearInterval(this.state.interval);
      this.props.disableHandler();
      this.setState(
        { ind: -1, changedWith: -1 },
        this.setState({ disabled: false })
      );
      return sorted;
    }
    min = i;
    for (let j = i + 1; j < sorted.length; j++)
      if (sorted[j] < sorted[min]) min = j;
    let temp = sorted[min];
    sorted[min] = sorted[i];
    sorted[i] = temp;
    this.setState({ changedWith: min });
    return sorted;
  };

  sortArrHandler = () => {
    this.setState({ disabled: true }, () => {
      this.props.disableHandler();
      const interval = setInterval(() => {
        this.setState({ interval: interval });
        const sorted = this.selectionSortHandler();
        this.setState({ unsorted: [...sorted], ind: this.state.ind + 1 });
      }, this.state.speed);
    });
  };

  lengthHandler = (val) => {
    this.setState({ len: val, ind: 0 }, () => this.generateArrHandler());
  };

  speedHandler = ({ target }) => {
    let val = target.value;
    val = 1050 - val;
    this.setState({ speed: val });
  };

  stopHandler = () => {
    clearInterval(this.state.interval);
    this.props.disableHandler();
    this.setState({ disabled: false });
  };

  render() {
    const bars = this.state.unsorted.map((val, key) => {
      return (
        <Bar
          key={key}
          height={val}
          color={
            this.state.ind - 1 === key
              ? 1
              : this.state.changedWith === key
              ? 2
              : 0
          }
        />
      );
    });
    return (
      <React.Fragment>
        <div className={classes.sortDiv}>{bars}</div>
        <Controls
          speed={this.state.speed}
          speedHandler={this.speedHandler}
          sort={this.sortArrHandler}
          disabled={this.state.disabled}
          stop={this.stopHandler}
        />
      </React.Fragment>
    );
  }
}

export default SortApp;
