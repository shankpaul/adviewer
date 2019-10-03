// import { ADD_ARTICLE,DELETE_ARTICLE ,UPDATE_ARTICLE} from "../constants/action_types";
import axios from 'axios';
import { reset } from 'redux-form'
axios.defaults.baseURL = 'http://10.188.165.99:8080/api';

// export function addArticle(payload) {
//     return { type: ADD_ARTICLE, payload }
// };

// export function deleteArticle(id){
//     return {type: DELETE_ARTICLE, id }
// }

// export function updateArticle(payload){
//     return {type: UPDATE_ARTICLE, payload}
// }

// export function registerUser(payload){
//   return {type: 'REGISTER_USER', payload} 
// }


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