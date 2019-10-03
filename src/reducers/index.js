import { combineReducers} from  'redux';
import { SignupReducer } from './signup_reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    user: SignupReducer,
    form: formReducer
});

export default rootReducer;