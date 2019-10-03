import axios from 'axios';
axios.defaults.baseURL = 'http://10.188.165.99:8080/api';

export const saveUserMiddleware = store => next => action => {
  if (action.type === 'REGISTER_USER') {
    axios.post('/users', action.payload, {headers: {  'Content-Type': 'application/json',}})
    .then((response) => {
      store.dispatch({type: 'REGISTER_USER', payload: response})
    })
    .catch((error)=> {
     store.dispatch({type: 'REGISTER_USER_FAILED', payload: error })
    });

    return next(action);
  }
  else { return next(action) }
}