import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form,  Button, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const validate = values => {
  const errors = []

  if (!values.email) {
    errors.push('Email required')
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.push('Invalid email address')
  }

  if (!values.password) {
    errors.push('Password required');
  }

  return errors
}

let SignInForm = props => {
 const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <Form.Field>
        <label>Email</label>
        <Field name='email' component="input" type="text" placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Field name='password' component="input" type="password" placeholder='Password'  />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Remember Me'/>
      </Form.Field>
      <Form.Field>
        Don't have an account? <Link to="/">Sign up Now</Link>
      </Form.Field>
      <Button type='submit'>Sign in</Button>
    </Form>
    )
}

SignInForm = reduxForm({
  form: 'signin',
  validate,
  touchOnBlur: false
})(SignInForm)

export default SignInForm
