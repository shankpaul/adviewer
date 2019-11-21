import React from "react";
import { isAuthenticated } from "../helpers/auth";

class Dashboard extends React.Component {
  render() {
    return <h2> Welcome to adviewer {isAuthenticated()}</h2>;
  }
}

export default Dashboard;
