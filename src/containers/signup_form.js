import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form,  Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const validate = values => {
  const errors = []
  if (!values.name) {
    errors.push('Name required')
  }
  if (!values.email) {
    errors.push('Email required')
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.push('Invalid email address')
  }

  if (!values.password) {
    errors.push('Password required');
  }

  if (values.password_confirmation!== values.password){
    errors.push('Password not matched')
  }

  if (!values.terms) {
    errors.push('Please accept terms')
  }
  return errors
}

let SignupForm = props => {
  const {  handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up Now</h2>
      <Form.Field>
        <label>Full Name</label>
        <Field name="name" component="input" type="text" placeholder='Full Name' />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Field name='email' component="input" type="text" placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Field name='password' component="input" type='password' placeholder='Password'/>
      </Form.Field>
      <Form.Field>
        <label>Confirm Password</label>
        <Field name='password_confirmation' component="input" type='password' placeholder='Confirm Password'/>
      </Form.Field>
      <Form.Field>
        <div className='ui checkbox'>
          <Field type='checkbox' component="input" name='terms' />
          <label>I agree to the Terms and Conditions</label>
        </div>
      </Form.Field>
      <Form.Field>
        Already have an account ? <Link to="/signin">Sign in</Link>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

SignupForm = reduxForm({
  form: 'signup',
  validate,
  touchOnBlur: false
})(SignupForm)

export default SignupForm