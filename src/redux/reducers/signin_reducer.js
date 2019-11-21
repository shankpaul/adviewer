const initialState ={
  signin_errors: '',
  signin_success: false
}

export function SigninReducer(state = initialState, action){

  if(action.type === 'LOGIN_USER'){
    localStorage.setItem('AUTH-TOKEN', action.payload.auth_token);
    return Object.assign({}, state, action.payload, { signin_success: true });
  }

  if(action.type === 'LOGIN_USER_FAILED'){
    console.log(action.payload)
    return Object.assign({}, state, { signin_errors: action.payload });
  }
  return state;
}