import React, { Component } from "react";
import SortApp from "../SortApp/SortApp";
import classes from "./Layout.module.css";
import Nav from "../../ui/Navigation/Navigation";

class Layout extends Component {
  state = {
    len: 5,
    randomize: true,
    sort: false,
    disabled: false,
  };

  lengthHandler = ({ target }) => {
    this.setState({ len: target.value });
  };

  randomizeHandler = () => {
    let val = this.state.randomize;
    this.setState({ randomize: !val });
  };

  sortHandler = () => {
    this.setState({ sort: true });
  };

  disableHandler = () => {
    let val = this.state.disabled;
    this.setState({ disabled: !val });
  };

  render() {
    return (
      <React.Fragment>
        <Nav
          lenHandler={this.lengthHandler}
          len={this.state.len}
          randomize={this.randomizeHandler}
          sort={this.sortHandler}
          disabled={this.state.disabled}
        />
        <div className={classes.layout}>
          <SortApp
            len={this.state.len}
            randomize={this.state.randomize}
            sort={this.state.sort}
            randomizeHandler={this.randomizeHandler}
            disableHandler={this.disableHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
