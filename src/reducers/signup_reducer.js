// import { ADD_ARTICLE, DELETE_ARTICLE,UPDATE_ARTICLE } from "../constants/action_types";

import { SubmissionError } from 'redux-form';



const initialState ={
    signup_errors: '',
    signup_success: ''
}

// export function rootReducer(state = initialState, action) {
//     if(action.type == ADD_ARTICLE){
//         return Object.assign({}, state, { articles: state.articles.concat(action.payload)});
//     }

//     if(action.type == DELETE_ARTICLE){
//         return Object.assign({}, state, { 
//             articles: state.articles.filter(({ id })=> id !== action.id)
//         })
//     }

//     if(action.type == UPDATE_ARTICLE){
//         return Object.assign({}, state, { articles: state.articles.map((item) => {
//                 if(item.id == action.payload.id){
//                     return{
//                         ...item,
//                         title: action.payload.title
//                     }
//                 }
//                 return item
//             })
//         })
//     }
//     return state;
// };

export function SignupReducer(state = initialState, action){

    if(action.type == 'REGISTER_USER'){
        console.log('REGISTER')
        return Object.assign({}, state, action.payload, {signup_errors: '', signup_success: 'Successfully registerd'});
    }

    if(action.type == 'REGISTER_USER_FAILED'){
        console.log('REGISTER FAILED')
        return Object.assign({}, state, {signup_errors: action.payload.data});
    }
    return state;
}