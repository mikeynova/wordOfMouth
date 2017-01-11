import * as actions from '../actions/index.js';
import test from '../components/signUp.js';
import { dispatch } from '../index.js'

exports.first = function(first, error) {
	if(error.innerHTML === 'SOME ERROR') {
		return;
	} else if(!/[a-zA-Z\s:]/.test(first)){
		dispatch(actions.firstNameError('error'))
		error.innerHTML += 'SOME ERROR'
		return true;
	}
}

exports.last = function(last) {
	// console.log(last + ': ' + 'last validation function')
}

exports.email = function(email) {
	// console.log(email + ': ' + 'email validation function')
}

exports.password = function(password) {
	// console.log(password + ': ' + 'password validation funciton')
}
exports.repeatPassword = function(repeatPassword) {
	// console.log(repeatPassword + ': ' + 'repeatPassword validation function')
}