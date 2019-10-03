import React from 'react'
import {Form,Input, Checkbox, Button, Message} from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class Signin extends React.Component{
  state = { email:'', 
            password:'',
            authenticated: false,
            auth_failed: false,
            token:'',
            error: ''
          }
  handleSubmit = (event) => {
    this.validateForm();
    if(this.state.errors.length === 0){
      console.log(this.state)
    }
    
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
  validateForm = () =>{
    let fields = ['email','password',]
    let errors_lines = []
    fields.forEach((key)=>{
      let error = this.validateInput(key,this.state[key]);
      if(error!==''){
        errors_lines.push(error)
      }
    });
    this.setState({error: errors_lines});
  }

  
  validateInput = (name, value) =>  {
    let error = '';
    switch(name) {
      case 'email':
        if(value===""){
          error = 'Please enter you email'
        } 
        else{
          this.setState({email_error: false});
        }
        break;
      default:
        break;
    }
    return error;
  }
  
  render(){
    return(
      <React.Fragment>
        
        <Message
            error
            header={this.state.error}
            hidden={this.state.error === ''}
        />
        <Form onSubmit={this.handleSubmit}>
        
          <h2>Sign In</h2>
          <Form.Field>
            <label>Email</label>
            <Input name='email' error={this.state.email_error} value={this.state.value} onChange={this.handleChange} placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input name='password' error={this.state.password_error}  type='password' placeholder='Password' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Remember Me'/>
          </Form.Field>
          <Form.Field>
            Don't have an account? <Link to="/">Sign up Now</Link>
          </Form.Field>
          <Button type='submit'>Sign in</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default Signin;