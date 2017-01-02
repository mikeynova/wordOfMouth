import React, { Component } from 'react';

export default class SignUp extends Component {
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
					<input style={loginInputs} className="loginInputs" type="text" placeholder="First"/>
					<input style={loginInputs} className="loginInputs" type="text" placeholder="Last"/>
					<input style={loginInputs} className="loginInputs" type="text" placeholder="email"/>
					<input style={loginInputs} className="loginInputs" type="text" placeholder="password"/>
					<input style={loginInputs} className="loginInputs" type="text" placeholder="repeat password"/>	
					<button style={loginButton}>Confirm</button>
				</div>
			</div>
		)
	}
}