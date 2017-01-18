import { combineReducers } from 'redux';
import firstError from './firstErrorSignUp';
import lastError from './lastErrorSignUp';
import emailError from './emailErrorSignup';
import passwordError from './passwordErrorSignUp';
import repeatPasswordError from './repeatPasswordErrorSignUp';

const rootReducer = combineReducers({
	firstError: firstError,
	lastError: lastError,
	emailError: emailError,
	passwordError: passwordError,
	repeatPasswordError: repeatPasswordError
})

export default rootReducer;