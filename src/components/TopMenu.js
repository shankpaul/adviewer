import React from "react";
import { Menu, Image, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthenticated } from "../helpers/auth";

class TopMenu extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name.toLowerCase() });
  };

  logout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };

  addLinks = activeItem => {
    if (isAuthenticated()) {
      return (
        <React.Fragment>
          <Menu.Item
            link={true}
            as={Link}
            name="Home"
            to="/"
            color={"blue"}
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Logout"
            as={Link}
            to="signin"
            color={"blue"}
            active={activeItem === "logout"}
            onClick={this.logout}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Menu.Item
            link={true}
            as={Link}
            name="Home"
            to="/"
            color={"blue"}
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Login"
            as={Link}
            to="signin"
            color={"blue"}
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Signup"
            color={"blue"}
            active={activeItem === "signup"}
            onClick={this.handleItemClick}
          />
        </React.Fragment>
      );
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Menu secondary>
          <Menu.Item as="a" header>
            <Image size="small" src="/logo-sm-c.png" />
          </Menu.Item>
          <Menu.Menu position="right">{this.addLinks(activeItem)}</Menu.Menu>
        </Menu>
        <Divider />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.login
  };
}

export default connect(mapStateToProps, "")(TopMenu);
