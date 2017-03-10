import * as actions from '../actions/signUpValidationActions.js';
import test from '../components/signUp.js';
import { dispatch } from '../index.js'

exports.first = function(first, error) {
	if(error.innerHTML.length && (/^\s*$/.test(first))) {
		error.innerHTML = 'enter your first name here';
		dispatch(actions.firstNameError('error'));	
	} else if(!(/^\s*$/.test(first))) {
			error.setAttribute('<img src=\'client/assets/greenCheck.png\'>');
			dispatch(actions.firstNameError('no error'));
	} else if((/^\s*$/.test(first))) {
			dispatch(actions.firstNameError('error'));
			error.innerHTML = 'enter your first name here';
	}
}

exports.last = function(last, error) {
	if(error.innerHTML.length && (/^\s*$/.test(last))) {
		return;
	} else if(!(/^\s*$/.test(last))) {
			error.innerHTML = "";
			dispatch(actions.lastNameError('no error'));
	} else if((/^\s*$/.test(last))) {
			dispatch(actions.lastNameError('error'));
			error.innerHTML += 'enter your last name here';
		return true;
	}
}

exports.email = function(email, error) {
	if(error.innerHTML.length && !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
		return;
	} else if((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
			error.innerHTML = '';
			dispatch(actions.emailError('no error'));
	} else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
			dispatch(actions.emailError('error'));
			error.innerHTML += 'please enter a valid email';
	}
}

exports.password = function(password, repeatPassword, error) {
	if(error.innerHTML.length && (/^\s*$/.test(password))) {
		return
	} else if(!(/^\s*$/.test(password))) {
			error.innerHTML = '';
			dispatch(actions.passwordError('no error'));
	} else if ((/^\s*$/.test(password))) {
			dispatch(actions.passwordError('error'));
			error.innerHTML += 'please enter a password';
	}
}
exports.repeatPassword = function(repeatPassword, password, error) {
	if(error.innerHTML.length && (/^\s*$/.test(repeatPassword))) {
		return
	} else if (error.innerHTML.length < 1 && password !== repeatPassword || error.innerHTML.length < 1 && (/^\s*$/.test(repeatPassword))) {
			dispatch(actions.repeatPasswordError('error'));
			error.innerHTML += 'please repeat password';
	} else if(password === repeatPassword && !(/^\s*$/.test(repeatPassword))) {
			error.innerHTML = '';
			dispatch(actions.repeatPasswordError('no error'));
	}
}