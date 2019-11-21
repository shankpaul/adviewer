import { combineReducers} from  'redux';
import { SignupReducer } from './signup_reducer';
import { SigninReducer } from './signin_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    user: SignupReducer,
    form: formReducer,
    login: SigninReducer
});

export default rootReducer;