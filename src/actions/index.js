import axios from 'axios';
import { reset } from 'redux-form'
axios.defaults.baseURL = 'http://10.188.165.99:8080/api';

export const registerUser = (payload) => dispatch => {
    return axios.post('/users', payload, {headers: {  'Content-Type': 'application/json',}})
    .then((response) => {
      dispatch({type: 'REGISTER_USER', payload: response.data})
      dispatch(reset('signup')); 
    })
    .catch((error)=> {
      dispatch({type: 'REGISTER_USER_FAILED', payload: error.response })
    });
}