import * as actions from '../actions/signUpValidationActions.js';
import { connect } from 'react-redux';
import test from '../components/signUp.js';
import { dispatch } from '../index.js';
import { EventEmitter } from 'events';
import React, {Component} from 'react';
import { store } from '../index.js';

const path = require('path');

export default class AuthValidation extends Component {
	constructor(props) {
		super(props)
		this.first = this.first.bind(this);
		this.email = this.email.bind(this);
		this.password = this.password.bind(this);
		this.repeatPassword = this.repeatPassword.bind(this);
		this.emailToError = this.emailToError.bind(this);
	}
		first(first, error) {
			console.log('auth: ', this.props)
			if((/^\s*$/.test(first))) {
				error.innerHTML = '';
				var img = document.createElement('img');
				img.setAttribute('src', require('../assets/redX.png'));
				img.style.height = '16px';
		  	img.style.marginRight = '5px';
		  	img.style.transform = 'translateY(21%)';
				error.appendChild(img);
				error.innerHTML += 'Enter your first name here.';
				dispatch(actions.firstNameError('error'));
			} else if(!(/^\s*$/.test(first)) && error.innerHTML.length) {
					error.innerHTML = '';
					var img = document.createElement('img');
					img.setAttribute('src', require('../assets/greenCheck.png'));
					img.style.height = '16px';
			  	img.style.marginRight = '5px';
			  	img.style.transform = 'translateY(9%)';
					error.appendChild(img);
					error.innerHTML += 'Your name looks great.';
					dispatch(actions.firstNameError('no error'));
			} else if(!(/^\s*$/.test(first))) {
					error.innerHTML = '';
					var img = document.createElement('img');
					img.setAttribute('src', require('../assets/greenCheck.png'));
					img.style.height = '16px';
		    	img.style.marginRight = '5px';
			  	img.style.transform = 'translateY(9%)';
					error.appendChild(img);
					error.innerHTML += 'Your name looks great.';
					dispatch(actions.firstNameError('no error'));
			}
		}
		email(email, error) {
			if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
				error.innerHTML = '';
				var img = document.createElement('img');
				img.setAttribute('src', require('../assets/redX.png'));
				img.style.height = '16px';
		  	img.style.marginRight = '5px';
		  	img.style.transform = 'translateY(21%)';
				error.appendChild(img);
				error.innerHTML += 'Enter a valid email address.';
				dispatch(actions.emailError('error'));
			} else if((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
					error.innerHTML = '';
					var img = document.createElement('img');
					img.setAttribute('src', require('../assets/greenCheck.png'));
					img.style.height = '16px';
		    	img.style.marginRight = '5px';
			  	img.style.transform = 'translateY(9%)';
					error.appendChild(img);
					error.innerHTML += 'Valid email.';
					dispatch(actions.emailError('no error'));
			}
		}
		password(password, repeatPassword, passError, rePeatError) {
			if((/^\s*$/.test(password))) {
				passError.innerHTML = '';
				var img = document.createElement('img');
				img.setAttribute('src', require('../assets/redX.png'));
				img.style.height = '16px';
		  	img.style.marginRight = '5px';
		  	img.style.transform = 'translateY(21%)';
				passError.appendChild(img);
				passError.innerHTML += 'Please enter a password.';
				dispatch(actions.passwordError('error'));
			} else if(password.length < 7) {
					passError.innerHTML = '';
					var img = document.createElement('img');
					img.setAttribute('src', require('../assets/redX.png'));
					img.style.height = '16px';
			  	img.style.marginRight = '5px';
			  	img.style.transform = 'translateY(21%)';
					passError.appendChild(img);
					passError.innerHTML += 'Your password must be longer than 6 characters.'
					dispatch(actions.passwordError('error'));
			} else if (password.length >= 7) {
					passError.innerHTML = '';
					var img = document.createElement('img');
					img.setAttribute('src', require('../assets/greenCheck.png'));
					img.style.height = '16px';
		    	img.style.marginRight = '5px';
			  	img.style.transform = 'translateY(9%)';
					passError.appendChild(img);
					passError.innerHTML += 'Valid password.';
					dispatch(actions.passwordError('no error'));
			}
		}
		repeatPassword() {
			if(password.length < 1 && repeatPassword.length > 0) {
				rePeatError.innerHTML = '';
				var img = document.createElement('img');
				img.setAttribute('src', require('../assets/redX.png'));
				img.style.height = '16px';
	    	img.style.marginRight = '5px';
		  	img.style.transform = 'translateY(9%)';
				rePeatError.appendChild(img);
				rePeatError.innerHTML += 'Please enter a password in the input above.';
				dispatch(actions.repeatPasswordError('error'));
			} else if(password.length >= 7 && password != repeatPassword) {
					rePeatError.innerHTML = '';
					var img = document.createElement('img');
					img.setAttribute('src', require('../assets/redX.png'));
					img.style.height = '16px';
		    	img.style.marginRight = '5px';
			  	img.style.transform = 'translateY(9%)';
					rePeatError.appendChild(img);
					rePeatError.innerHTML += 'Your passwords do not match.';
					dispatch(actions.repeatPasswordError('error'));
			} else if(password.length >= 7 && password === repeatPassword) {
					rePeatError.innerHTML = '';
					var img = document.createElement('img');
					img.setAttribute('src', require('../assets/greenCheck.png'));
					img.style.height = '16px';
		    	img.style.marginRight = '5px';
			  	img.style.transform = 'translateY(9%)';
					rePeatError.appendChild(img);
					rePeatError.innerHTML += 'Your passwords match!';
					dispatch(actions.repeatPasswordError('no error'));
			}
		}
		emailToError() {
			error.innerHTML = '';
			var img = document.createElement('img');
			img.setAttribute('src', require('../assets/redX.png'));
			img.style.height = '16px';
			img.style.marginRight = '5px';
			img.style.transform = 'translateY(9%)';
			error.appendChild(img);
			error.innerHTML += 'Add a different email address.';
			dispatch(actions.emailError('error'))
		}
		render() {
			return(
				<div>
					fuck you
				</div>
			)
		}
}

// const mapStateToProps = state => {
// 	return {
// 		firstError: state.firstError,
// 		lastError: state.lastError,
// 		emailError: state.emailError,
// 		passwordError: state.passwordError,
// 		repeatPasswordError: state.repeatPasswordError
// 	}
// }

// export default connect(mapStateToProps, actions)(AuthValidation);

// exports.first = function(first, error) {
// 	if((/^\s*$/.test(first))) {
// 		error.innerHTML = '';	
// 		var img = document.createElement('img');
// 		img.setAttribute('src', require('../assets/redX.png'));
// 		img.style.height = '16px';
//   	img.style.marginRight = '5px';
//   	img.style.transform = 'translateY(21%)';
// 		error.appendChild(img);
// 		error.innerHTML += 'Enter your first name here.';
// 		dispatch(actions.firstNameError('error'));
// 	} else if(!(/^\s*$/.test(first)) && error.innerHTML.length) {
// 			error.innerHTML = '';
// 			var img = document.createElement('img');
// 			img.setAttribute('src', require('../assets/greenCheck.png'));
// 			img.style.height = '16px';
//     	img.style.marginRight = '5px';
// 	  	img.style.transform = 'translateY(9%)';
// 			error.appendChild(img);
// 			error.innerHTML += 'Your name looks great.';
// 			dispatch(actions.firstNameError('no error'));
// 	} else if(!(/^\s*$/.test(first))) {
// 			error.innerHTML = '';
// 			var img = document.createElement('img');
// 			img.setAttribute('src', require('../assets/greenCheck.png'));
// 			img.style.height = '16px';
//     	img.style.marginRight = '5px';
// 	  	img.style.transform = 'translateY(9%)';
// 			error.appendChild(img);
// 			error.innerHTML += 'Your name looks great.';
// 			dispatch(actions.firstNameError('no error'));
// 	}
// }

// exports.email = function(email, error) {
// 	if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
// 		error.innerHTML = '';
// 		var img = document.createElement('img');
// 		img.setAttribute('src', require('../assets/redX.png'));
// 		img.style.height = '16px';
//   	img.style.marginRight = '5px';
//   	img.style.transform = 'translateY(21%)';
// 		error.appendChild(img);
// 		error.innerHTML += 'Enter a valid email address.';
// 		dispatch(actions.emailError('error'));
// 	} else if((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
// 			error.innerHTML = '';
// 			var img = document.createElement('img');
// 			img.setAttribute('src', require('../assets/greenCheck.png'));
// 			img.style.height = '16px';
//     	img.style.marginRight = '5px';
// 	  	img.style.transform = 'translateY(9%)';
// 			error.appendChild(img);
// 			error.innerHTML += 'Valid email.';
// 			dispatch(actions.emailError('no error'));
// 	}
// }

// exports.password = function(password, repeatPassword, passError, rePeatError) {
// 	if((/^\s*$/.test(password))) {
// 		console.log('first')
// 		passError.innerHTML = '';
// 		var img = document.createElement('img');
// 		img.setAttribute('src', require('../assets/redX.png'));
// 		img.style.height = '16px';
//   	img.style.marginRight = '5px';
//   	img.style.transform = 'translateY(21%)';
// 		passError.appendChild(img);
// 		passError.innerHTML += 'Please enter a password.';
// 		dispatch(actions.passwordError('error'));
// 	} else if(password.length < 7) {
// 			passError.innerHTML = '';
// 			var img = document.createElement('img');
// 			img.setAttribute('src', require('../assets/redX.png'));
// 			img.style.height = '16px';
// 	  	img.style.marginRight = '5px';
// 	  	img.style.transform = 'translateY(21%)';
// 			passError.appendChild(img);
// 			passError.innerHTML += 'Your password must be longer than 6 characters.'
// 			dispatch(actions.passwordError('error'));
// 	} else if (password.length >= 7) {
// 			passError.innerHTML = '';
// 			var img = document.createElement('img');
// 			img.setAttribute('src', require('../assets/greenCheck.png'));
// 			img.style.height = '16px';
//     	img.style.marginRight = '5px';
// 	  	img.style.transform = 'translateY(9%)';
// 			passError.appendChild(img);
// 			passError.innerHTML += 'Valid password.';
// 			dispatch(actions.passwordError('no error'));
// 	}
// }

// exports.repeatPassword = function(password, repeatPassword, passError, rePeatError) {
// 	if(password.length < 1 && repeatPassword.length > 0) {
// 			rePeatError.innerHTML = '';
// 			var img = document.createElement('img');
// 			img.setAttribute('src', require('../assets/redX.png'));
// 			img.style.height = '16px';
//     	img.style.marginRight = '5px';
// 	  	img.style.transform = 'translateY(9%)';
// 			rePeatError.appendChild(img);
// 			rePeatError.innerHTML += 'Please enter a password in the input above.';
// 			dispatch(actions.repeatPasswordError('error'));
// 	} else if(password.length >= 7 && password != repeatPassword) {
// 			rePeatError.innerHTML = '';
// 			var img = document.createElement('img');
// 			img.setAttribute('src', require('../assets/redX.png'));
// 			img.style.height = '16px';
//     	img.style.marginRight = '5px';
// 	  	img.style.transform = 'translateY(9%)';
// 			rePeatError.appendChild(img);
// 			rePeatError.innerHTML += 'Your passwords do not match.';
// 			dispatch(actions.repeatPasswordError('error'));
// 	} else if(password.length >= 7 && password === repeatPassword) {
// 			rePeatError.innerHTML = '';
// 			var img = document.createElement('img');
// 			img.setAttribute('src', require('../assets/greenCheck.png'));
// 			img.style.height = '16px';
//     	img.style.marginRight = '5px';
// 	  	img.style.transform = 'translateY(9%)';
// 			rePeatError.appendChild(img);
// 			rePeatError.innerHTML += 'Your passwords match!';
// 			dispatch(actions.repeatPasswordError('no error'));
// 	}
// }

// exports.emailToError = function(error) {
// 	error.innerHTML = '';
// 	var img = document.createElement('img');
// 	img.setAttribute('src', require('../assets/redX.png'));
// 	img.style.height = '16px';
// 	img.style.marginRight = '5px';
// 	img.style.transform = 'translateY(9%)';
// 	error.appendChild(img);
// 	error.innerHTML += 'Add a different email address.';
// 	dispatch(actions.emailError('error'))
// }