import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image, Grid, Message } from "semantic-ui-react";
import { registerUser } from "../redux/actions/index";
import SignupForm from "../containers/signup_form";

class Signup extends React.Component {
  handleSubmit = values => {
    if (this.props.errors.length === 0) {
      this.props.registerUser(values);
      console.log(values);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={10}>
              <Image src="/banner.jpg" position="left" size="big" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Message
                success
                header={this.props.signup_success}
                hidden={this.props.signup_success === ""}
              />

              <Message
                error
                header={this.props.signup_errors}
                hidden={this.props.signup_errors === ""}
              />

              <Message
                error
                header="Please correct errors"
                list={this.props.errors}
                hidden={this.props.errors.length === 0}
              />
              <SignupForm onSubmit={this.handleSubmit} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

function MapStatetoProps(state) {
  let errors = [];
  let forms = state.form;
  let hasSignUp = "signup" in forms;
  if (hasSignUp) {
    let hasErrors = "syncErrors" in forms.signup;
    if (hasErrors && state.form.signup.anyTouched) {
      if (Object.entries(state.form.signup.syncErrors).length !== 0) {
        errors = Object.values(state.form.signup.syncErrors);
      }
    }
  }

  return {
    errors: errors,
    signup_errors: state.user.signup_errors,
    signup_success: state.user.signup_success
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerUser: registerUser }, dispatch);
}

export default connect(MapStatetoProps, mapDispatchToProps)(Signup);
