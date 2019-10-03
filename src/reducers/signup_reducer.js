import { SubmissionError } from 'redux-form';

const initialState ={
  signup_errors: '',
  signup_success: ''
}

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