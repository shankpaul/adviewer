import React from "react";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Message, Image, Grid } from "semantic-ui-react";

import SignInForm from "../containers/signin_form";
import { loginUser } from "../redux/actions";

class Signin extends React.Component {
  handleSubmit = values => {
    //calling action
    if (values !== "") this.props.loginUser(values);
  };

  handleSignIn = () => {
    if (this.props.signin_success) {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.handleSignIn()}
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={10}>
              <Image src="/banner.jpg" position="left" size="big" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Message
                error
                header={this.props.errors}
                hidden={this.props.errors.length === 0}
              />
              <SignInForm onSubmit={this.handleSubmit} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  let errors = [];
  let forms = state.form;
  let hasSignIn = "signin" in forms;
  if (hasSignIn) {
    let hasErrors = "syncErrors" in forms.signin;
    if (hasErrors && state.form.signin.anyTouched) {
      if (Object.entries(state.form.signin.syncErrors).length !== 0) {
        errors = Object.values(state.form.signin.syncErrors);
      }
    }
  }

  if (state.login.signin_errors !== "") {
    errors.push(state.login.signin_errors);
  }

  return {
    errors: errors,
    signin_errors: state.login.signin_errors,
    signin_success: state.login.signin_success
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser: loginUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
