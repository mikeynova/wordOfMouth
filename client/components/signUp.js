import React, { Component } from 'react';
import validate from '../helpers/signUpValidation.js';
import { connect } from 'react-redux';
import { actions } from '../actions/signUpValidationActions.js';
import ReactTransitionGroup from 'react-addons-transition-group';
import injectSheet from 'react-jss';
import axios from 'axios';

const styles = {
  inputBox: {
			margin: "5px",
			marginLeft: "0px",
			WebkitBorderRadius: "3px",
			borderStyle: "solid",
			borderColor: "#E1E8ED",
			width: "600px",
			height: "35px",
			marginRight: "15px",
			padding: "10px",
 		'&:focus': {
	    outline: "none",
      boxShadow: "0px 0px 8px #ADD8E6"
 		},
  },
  label: {
    fontWeight: 'bold'
  },
  inputTitles: {
  	margin: "0px",
  	textAlign: "left",
  	paddingTop: "10px"
  },
  error: {
		lineHeight: "20px",
		color: '#E44061',
	  WebkitTransition: 'opacity .7s ease-in-out',
 		MozTransition: 'opacity .7s ease-in-out',
 		msTransition: 'opacity .7s ease-in-out',
 		OTransition: 'opacity .7s ease-in-out',
 		transition: 'opacity .7s ease-in-out'
	},
	noError: {
		lineHeight: "20px",
		color: '#6EC02A',
	  WebkitTransition: 'opacity .7s ease-in-out',
 		MozTransition: 'opacity .7s ease-in-out',
 		msTransition: 'opacity .7s ease-in-out',
 		OTransition: 'opacity .7s ease-in-out',
 		transition: 'opacity .7s ease-in-out'
	},
	hiddenInput: {
		opacity: '0',
		lineHeight: '0'
	},
	loginBox: {
		borderStyle: "solid",
		borderWidth: "2px",
		borderColor: "transparent",
		borderRadius: "3%",
		minHeight: "500px",
		minWidth: "910px",
		position: "fixed",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)"
	},
	inputContainer: {
		transform: "translate(8%, 0%)",
		position: "static",
		left: "30%",
		top: "50%"
	},
	loginTitle: {
			textAlign: "left",
			lineHeight: "52px",
			whiteSpace: "nowrap"
		},
	emailTaken: {
		color: '#E44061',
		transform: "translate(35%, 20%)"
	}
}

@injectSheet(styles)
class SignUp extends Component {
	constructor(props) {
  super(props)
  let counter = 0;
	const {sheet: {classes}, children} = this.props
	  this.state = {
	  	first: '',
	  	email: '',
	  	password: '',
	  	repeatPassword: '',
	  	inputStyle: classes.focusBoarder,
	  	error: classes.error,
	  	span1: classes.hiddenInput,
	  	span2: classes.hiddenInput,
	  	span3: classes.hiddenInput,
	  	span4: classes.hiddenInput
	  }   
  }

  componentWillUpdate(props) {
		if(props.firstError === 'error' && props.firstError !== this.props.firstError) {
		  const {sheet: {classes}, children} = this.props;
	  		this.setState({
	  			span1: classes.error
	  		})
  	}
	  if(props.firstError === 'no error' && props.firstError !== this.props.firstError) {
		  const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span1: classes.noError
	  		})
  	}
///////////////////////////////////////////
  	if(props.emailError === 'error' && props.emailError !== this.props.emailError) {
  		const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span2: classes.error
	  		})
  	}
  	if(props.emailError === 'no error' && props.emailError !== this.props.emailError) {
		  const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span2: classes.noError
	  		})
  	}
///////////////////////////////////////////
		if(props.passwordError === 'error' && props.passwordError !== this.props.passwordError) {
  		const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span3: classes.error
	  		})
  	}
  	if(props.passwordError === 'no error' && props.passwordError !== this.props.passwordError) {
		  const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span3: classes.noError
	  		})
  	}
///////////////////////////////////////////
		if(props.repeatPasswordError === 'error' && props.repeatPasswordError !== this.props.repeatPasswordError) {
  		const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span4: classes.error
	  		})
  	}
  	if(props.repeatPasswordError === 'no error' && props.repeatPasswordError !== this.props.repeatPasswordError) {
		  const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span4: classes.noError
	  		})
  	}
}
	onChangeFirst(e) {
		const emailTaken = document.getElementById('emailTaken');
		emailTaken.innerHTML = '';
		const firstErrorEl = document.getElementById('firstName');
		this.setState({
			first: e.target.value
		}, () => {
			validate.first(this.state.first, firstErrorEl);
		})
	}

	onChangeEmail(e) {
		const emailTaken = document.getElementById('emailTaken');
		emailTaken.innerHTML = '';
		const emailErrorEl = document.getElementById('email');
		this.setState({
			email: e.target.value
		}, () => {
			validate.email(this.state.email, emailErrorEl);
		})
	}  

	onChangePassword(e) {
		const emailTaken = document.getElementById('emailTaken');
		emailTaken.innerHTML = '';
		const passwordErrorEl = document.getElementById('password');
		const repeatPasswordErrorEl = document.getElementById('repeatPassword');
		this.setState({
			password: e.target.value
		}, () => {
			validate.password(this.state.password, this.state.repeatPassword, passwordErrorEl, repeatPasswordErrorEl);
		})
	}

	onChangeRepeatPassword(e) {
		const emailTaken = document.getElementById('emailTaken');
		emailTaken.innerHTML = '';
		const passwordErrorEl = document.getElementById('password');
		const repeatPasswordErrorEl = document.getElementById('repeatPassword');
		this.setState({
			repeatPassword: e.target.value
		}, () => {
			validate.repeatPassword(this.state.password, this.state.repeatPassword, passwordErrorEl, repeatPasswordErrorEl);
		})
	}

	submit(e) {
		if(e.keyCode === 13) {
			const firstErrorEl = document.getElementById('firstName');
			const emailErrorEl = document.getElementById('email');
			const passwordErrorEl = document.getElementById('password');
			const repeatPasswordErrorEl = document.getElementById('repeatPassword');
				validate.first(this.state.first, firstErrorEl);
				validate.email(this.state.email, emailErrorEl);
				validate.password(this.state.password, this.state.repeatPassword, passwordErrorEl, repeatPasswordErrorEl);
				validate.repeatPassword(this.state.password, this.state.repeatPassword, passwordErrorEl, repeatPasswordErrorEl);
			if(this.state.span1 === 'noError-3313764068' && this.state.span2 === 'noError-3313764068' && this.state.span3 === 'noError-3313764068' && this.state.span4 === 'noError-3313764068') {
				axios.post('/signUp', {first: this.state.first, email: this.state.email, password: this.state.password})
  			.then((response) => {
  				console.log('response', response);
  				if(response.data.length) {
						const emailErrorEl = document.getElementById('email');
  					const emailTaken = document.getElementById('emailTaken');
  					emailTaken.innerHTML = "Your shit's taken.";
						validate.emailToError(emailErrorEl);
  					document.getElementById('emailInput').value = '';
  				} else if(!response.data.length && response.status === 200) {
						console.log('new user');
  				} 
				})	
			}
		}
	}

	render() {
    const {sheet: {classes}, children} = this.props
		return (
			<div className={classes.loginBox}>
				<div className={classes.inputContainer}>
				<h2 className={classes.loginTitle}>Word of Mouth Sign Up</h2>
					<form className={classes.form}>
						<h4 className={classes.inputTitles}>First name</h4>
							<input className={classes.inputBox} type="text" onKeyDown={this.submit.bind(this)} onChange={this.onChangeFirst.bind(this)} value={this.state.first}/>
							<span className={this.state.span1} id="firstName"></span>
						<h4 className={classes.inputTitles}>Email address</h4>
							<input className={classes.inputBox} id="emailInput" type="text" onKeyDown={this.submit.bind(this)} onChange={this.onChangeEmail.bind(this)}value={this.state.email}/>
							<span className={this.state.span2} id='email'></span>
						<h4 className={classes.inputTitles}>Create a password</h4>
							<input className={classes.inputBox} type="password" onKeyDown={this.submit.bind(this)} onChange={this.onChangePassword.bind(this)}value={this.state.password}/>
							<span className={this.state.span3} id='password'></span>
						<h4 className={classes.inputTitles}>Repeat your password</h4>
							<input className={classes.inputBox} type="password" onKeyDown={this.submit.bind(this)} onChange={this.onChangeRepeatPassword.bind(this)}value={this.state.repeatPassword}/>
							<span className={this.state.span4} id='repeatPassword'></span>
					</form>
				</div>
				<div className={classes.emailTaken} id="emailTaken"></div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		firstError: state.firstError,
		lastError: state.lastError,
		emailError: state.emailError,
		passwordError: state.passwordError,
		repeatPasswordError: state.repeatPasswordError
	}
}

export default connect(mapStateToProps, actions)(SignUp);