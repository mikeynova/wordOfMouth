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
			width: "450px",
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
		color: 'red',
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
		boxShadow: "0px 0px 15px 1px #ADD8E6",
		minHeight: "500px",
		minWidth: "910px",
		position: "fixed",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		// lineHeight: "150px"
	},
	inputContainer: {
		transform: "translate(8%, 10%)",
		position: "static",
		left: "30%",
		top: "50%"
	},
	loginButton: {
			display: "-webkit-box",
			margin: "auto",
			marginBottom: "5px",
			width: "150px",
			borderStyle: "solid",
			WebkitBorderRadius: "300px",
			backgroundColor: "#ADD8E6",
			borderColor: "#ADD8E6",
			color: "white",
			height: "25px",
			marginTop: "10px",
			cursor: "pointer",
	'&:focus': {
    outline: "none",
    boxShadow: "0px 0px 8px #ADD8E6"
		}
	},
	loginTitle: {
			textAlign: "left",
			lineHeight: "5px",
			whiteSpace: "nowrap"
		}
}

@injectSheet(styles)
class SignUp extends Component {
	constructor(props) {
  super(props)
	const {sheet: {classes}, children} = this.props
	  this.state = {
	  	first: '',
	  	last: '',
	  	email: '',
	  	password: '',
	  	repeatPassword: '',
	  	inputStyle: classes.focusBoarder,
	  	error: classes.error,
	  	span1: classes.hiddenInput,
	  	span2: classes.hiddenInput,
	  	span3: classes.hiddenInput,
	  	span4: classes.hiddenInput,
	  	span5: classes.hiddenInput
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
  	if(props.lastError === 'error' && props.lastError !== this.props.lastError) {
  		const {sheet: {classes}, children} = this.props;
	  		this.setState({
	  			span2: classes.error
	  		})
  	}
  	if(props.lastError === 'no error' && props.lastError !== this.props.lastError) {
		  const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span2: classes.noError
	  		})
  	}
///////////////////////////////////////////
  	if(props.emailError === 'error' && props.emailError !== this.props.emailError) {
  		const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span3: classes.error
	  		})
  	}
  	if(props.emailError === 'no error' && props.emailError !== this.props.emailError) {
		  const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span3: classes.noError
	  		})
  	}
///////////////////////////////////////////
		if(props.passwordError === 'error' && props.passwordError !== this.props.passwordError) {
  		const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span4: classes.error
	  		})
  	}
  	if(props.passwordError === 'no error' && props.passwordError !== this.props.passwordError) {
		  const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span4: classes.noError
	  		})
  	}
///////////////////////////////////////////
		if(props.repeatPasswordError === 'error' && props.repeatPasswordError !== this.props.repeatPasswordError) {
  		const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span5: classes.error
	  		})
  	}
  	if(props.repeatPasswordError === 'no error' && props.repeatPasswordError !== this.props.repeatPasswordError) {
		  const {sheet: {classes}, children} = this.props;
				this.setState({
	  			span5: classes.noError
	  		})
  	}
///////////////////////////////////////////
  	if(this.props.repeatPasswordError === 'no error' && this.props.passwordError === 'no error' && this.props.emailError === 'no error' && this.props.lastError === 'no error' && this.props.firstError === 'no error') {
  		console.log('woah');
  		axios.post('/signUp', {first: this.state.first, last: this.state.last, email: this.state.email, password: this.state.password})
  			.then(() => {
  				console.log('back to client')
  			}) 
  	}
  }

	onChangeFirst(e) {
		const firstErrorEl = document.getElementById('firstName');
		this.setState({
			first: e.target.value
		}, () => {
			validate.first(this.state.first, firstErrorEl)
		})
	}

	onChangeLast(e) {
		this.setState({
			last: e.target.value
		})
	}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value
		})
	}  

	onChangePassword(e) {
		this.setState({
			password: e.target.value
		})
	}

	onChangeRepeatPassword(e) {
		this.setState({
			repeatPassword: e.target.value
		})
	}

	submit(e) {
		e.preventDefault();
		// const firstErrorEl = document.getElementById('firstName');
		const lastErrorEl = document.getElementById('lastName');
		const emailErrorEl = document.getElementById('email');
		const passwordErrorEl = document.getElementById('password');
		const repeatPasswordErrorEl = document.getElementById('repeatPassword');

		// validate.first(this.state.first, firstErrorEl);
		validate.last(this.state.last, lastErrorEl);
		validate.email(this.state.email, emailErrorEl);
		validate.password(this.state.password, this.state.repeatPassword, passwordErrorEl);
		validate.repeatPassword(this.state.repeatPassword, this.state.password, repeatPasswordErrorEl);
	}
	render() {
    const {sheet: {classes}, children} = this.props
		return (
			<div className={classes.loginBox}>
				<div className={classes.inputContainer}>
				<h2 className={classes.loginTitle}>Word of Mouth Sign Up</h2>
					<form className={classes.form} onSubmit={this.submit.bind(this)}>
						<h4 className={classes.inputTitles}>First name</h4>
						<input className={classes.inputBox} type="text" onChange={this.onChangeFirst.bind(this)} value={this.state.first}/>
							<span className={this.state.span1} id="firstName"></span>
						<h4 className={classes.inputTitles}>Last name</h4>
						<input className={classes.inputBox} type="text" onChange={this.onChangeLast.bind(this)}value={this.state.last}/>
							<span className={this.state.span2} id="lastName"></span>
						<h4 className={classes.inputTitles}>Email address</h4>
						<input className={classes.inputBox} type="text" onChange={this.onChangeEmail.bind(this)}value={this.state.email}/>
							<span className={this.state.span3} id='email'></span>
						<h4 className={classes.inputTitles}>Create a password</h4>
						<input className={classes.inputBox} type="password" onChange={this.onChangePassword.bind(this)}value={this.state.password}/>
							<span className={this.state.span4} id='password'></span>
						<h4 className={classes.inputTitles}>Repeat your password</h4>
						<input className={classes.inputBox} type="password" onChange={this.onChangeRepeatPassword.bind(this)}value={this.state.repeatPassword}/>
							<span className={this.state.span5} id='repeatPassword'></span>
						<button className={classes.loginButton}>Confirm</button>
					</form>
				</div>
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