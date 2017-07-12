import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import _ from 'underscore';
import axios from 'axios'

export default class Login extends Component {
  signUpPage() {
    browserHistory.push('/signup')
  }

  componentDidMount() {
    axios.get('/here')
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <div className='loginBox'>
          <h1 className='loginTitle'>Word of Mouth</h1>
          <div className='inputContainer'>
            <input className='loginInputs' type="text" placeholder="Username"/>
            <input className='loginInputs' type="text" placeholder="Password"/>
            <button className='loginButton'>Sign In</button>
            <button className='loginButton' onClick={this.signUpPage}>Sign Up</button>
          </div>
        </div>
      </div>
    )
  }
}