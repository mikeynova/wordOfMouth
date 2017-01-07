import React, { Component } from 'react';
import validate from '../helpers/signUpValidation.js';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

class SignUp extends Component {
	constructor(props) {
  super(props)
	  this.state = {
	  	first: '',
	  	last: '',
	  	email: '',
	  	password: '',
	  	repeatPassword: ''
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
		//run validation
		validate.first(this.state.first);
		validate.last(this.state.last);
		validate.email(this.state.email);
		validate.password(this.state.password);
		validate.repeatPassword(this.state.repeatPassword);
	}
	render() {
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
			lineHeight: "100px"
		}
		return (
			<div style={loginBox}>
				<h2 style={loginTitle}>Word of Mouth Sign Up</h2>
				<div style={inputContainer}>
					<form onSubmit={this.submit.bind(this)}>
						<input style={loginInputs} className="loginInputs" type="text" placeholder="first" onChange={this.onChangeFirst.bind(this)} value={this.state.first}/>
						<span id="firstName"></span>
						<input style={loginInputs} className="loginInputs" type="text" placeholder="last" onChange={this.onChangeLast.bind(this)}value={this.state.last}/>
						<input style={loginInputs} className="loginInputs" type="text" placeholder="email" onChange={this.onChangeEmail.bind(this)}value={this.state.email}/>
						<input style={loginInputs} className="loginInputs" type="password" placeholder="password" onChange={this.onChangePassword.bind(this)}value={this.state.password}/>
						<input style={loginInputs} className="loginInputs" type="password" placeholder="repeat password" onChange={this.onChangeRepeatPassword.bind(this)}value={this.state.repeatPassword}/>	
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