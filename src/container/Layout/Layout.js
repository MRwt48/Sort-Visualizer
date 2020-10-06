import React, { Component } from "react";
import SortApp from "../SortApp/SortApp";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Nav</div>
        <SortApp />
      </React.Fragment>
    );
  }
}

export default Layout;
