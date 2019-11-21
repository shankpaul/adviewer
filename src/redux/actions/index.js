import axios from 'axios';
import { reset } from 'redux-form'
axios.defaults.baseURL = 'http://8f11861.lvh.me:5000/api/';

export const registerUser = (payload) => dispatch => {
    return axios.post('/users/signup', payload, {headers: {  'Content-Type': 'application/json'}})
    .then((response) => {
      dispatch({type: 'REGISTER_USER', payload: response.data})
      dispatch(reset('signup')); 
    })
    .catch((error)=> {
      dispatch({type: 'REGISTER_USER_FAILED', payload: error.response })
    });
}

export const loginUser = (payload) => dispatch => {
  // dispatching to reducer
  return axios.post('/users/signin', payload, {headers: {'Content-Type': 'application/json'}})
  .then((response) => {
    console.log('login')
    dispatch({type: 'LOGIN_USER', payload: response.data}); 
  })
  .catch((error)=> {
    console.log(error)
    dispatch({type: 'LOGIN_USER_FAILED', payload: error.response}); 
  });
}