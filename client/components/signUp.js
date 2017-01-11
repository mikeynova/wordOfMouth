import React, { Component } from 'react';
import validate from '../helpers/signUpValidation.js';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import ReactTransitionGroup from 'react-addons-transition-group'
import Promise from 'bluebird';
Promise.promisifyAll(validate);


import injectSheet from 'react-jss';

exports.test = function(x) {
		console.log('this is a test')
	}

const styles = {
  focusBoarder: {
 		'&:focus': {
	    outline: "none",
      boxShadow: "0px 0px 8px blue"
 		}
  },
  label: {
    fontWeight: 'bold'
  },
  // firstNameError: {
		// 		lineHeight: "20px",
		// 		color: 'red'
		// 	}
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
	  	inputStyle: classes.focusBoarder
	  }   
  }

	onChangeFirst(e) {
		this.setState({
			first: e.target.value
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
		const firstErrorEl = document.getElementById('firstName');
		//run validation
		// console.log(validate.first);
		// Promise.promisify(
		// 	()=> { 
		// 		return 
		var p2 = validate.first(this.state.first, firstErrorEl)()
		p2.then((res) => console.log(res)); 

		validate.last(this.state.last);
		validate.email(this.state.email);
		validate.password(this.state.password);
		validate.repeatPassword(this.state.repeatPassword);
	}
	render() {
    const {sheet: {classes}, children} = this.props
		const loginBox = {
			borderStyle: "solid",
			borderWidth: "2px",
			borderColor: "transparent",
			borderRadius: "3%",
			textAlign: "center",
			boxShadow: "0px 0px 15px 1px #ADD8E6",
			minHeight: "400px",
			minWidth: "400px",
			position: "fixed",
			left: "50%",
			top: "50%",
			transform: "translate(-50%, -50%)",
			lineHeight: "150px"
		}
		const loginInputs = {
			textAlign: "center",
			margin: "5px",
			WebkitBorderRadius: "300px",
			borderStyle: "solid",
			borderColor: "#ADD8E6",
			width: "225px",
			height: "25px"
		}
		const inputContainer = {
			transform: "translate(-50%, -50%)",
			position: "fixed",
			left: "50%",
			top: "50%"
		}
		const loginButton = {
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
			marginTop: "10px"
		}
		const loginTitle = {
			color: "grey",
			lineHeight: "27px"
		}
		// const firstNameError = {
			// display: "none",
			// lineHeight: "20px",
	  //   // opacity: '0',
	  //   animation: 'fade 2s linear',
	  //   WebkitTransition: 'opacity .5s ease-in-out',
   // 		MozTransition: 'opacity .5s ease-in-out',
   // 		msTransition: 'opacity .5s ease-in-out',
   // 		OTransition: 'opacity .5s ease-in-out',
   // 		transition: 'opacity .5s ease-in-out'
			// @keyframes fade {
			//   0%,100% { opacity: 0 }
			//   50% { opacity: 1 }
			// }
			// color: 'red'
		// }

		return (
			<div style={loginBox}>
				<div style={inputContainer}>
				<h3 style={loginTitle}>Word of Mouth Sign Up</h3>
					<form onSubmit={this.submit.bind(this)}>
						<input style={loginInputs} className={this.state.inputStyle} type="text" placeholder="first" onChange={this.onChangeFirst.bind(this)} value={this.state.first}/>
						<ReactTransitionGroup style={this.state.firstNameError} id="firstName"></ReactTransitionGroup>
						<input style={loginInputs} className={this.state.inputStyle} type="text" placeholder="last" onChange={this.onChangeLast.bind(this)}value={this.state.last}/>
						<input style={loginInputs} className={this.state.inputStyle} type="text" placeholder="email" onChange={this.onChangeEmail.bind(this)}value={this.state.email}/>
						<input style={loginInputs} className={this.state.inputStyle} type="password" placeholder="password" onChange={this.onChangePassword.bind(this)}value={this.state.password}/>
						<input style={loginInputs} className={this.state.inputStyle} type="password" placeholder="repeat password" onChange={this.onChangeRepeatPassword.bind(this)}value={this.state.repeatPassword}/>	
						<button style={loginButton}>Confirm</button>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		firstError: state.firstError
	}
}

export default connect(mapStateToProps, actions)(SignUp);