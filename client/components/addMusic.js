import React, { Component } from 'react';
import * as actions from '../actions/signUpValidationActions.js';
import { connect } from 'react-redux';
import { EventEmitter } from 'events';

class addMusic extends Component {
	constructor() {
		super()
	}

	componentDidMount() {
		console.log(this.props)
	}

	render() {
		return (
			<h1>Hello addMusic</h1>
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

export default connect(mapStateToProps, actions)(addMusic);