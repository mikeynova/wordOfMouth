import React, { Component } from 'react'
import AuthValidation from '../signUpValidation.js';
import { connect } from 'react-redux';
import axios from 'axios';


class SignUp extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      first: '',
      email: '',
      password: '',
      repeatPassword: '',
      // inputStyle: classes.focusBoarder,
      error: '.error',
      span1: '.hiddenInput',
      span2: '.hiddenInput',
      span3: '.hiddenInput',
      span4: '.hiddenInput',
    }  
  }
  
  componentDidMount() {
  }

  componentWillUpdate(props) {
    if(props.firstError === 'error' && props.firstError !== this.props.firstError) {
        this.setState({
          span1: classes.error
        })
    }
    if(props.firstError === 'no error' && props.firstError !== this.props.firstError) {
        this.setState({
          span1: classes.noError
        })
    }
///////////////////////////////////////////
    if(props.emailError === 'error' && props.emailError !== this.props.emailError) {
        this.setState({
          span2: classes.error
        })
    }
    if(props.emailError === 'no error' && props.emailError !== this.props.emailError) {
        this.setState({
          span2: classes.noError
        })
    }
///////////////////////////////////////////
    if(props.passwordError === 'error' && props.passwordError !== this.props.passwordError) {
        this.setState({
          span3: classes.error
        })
    }
    if(props.passwordError === 'no error' && props.passwordError !== this.props.passwordError) {
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
      // validate.first(this.state.first, firstErrorEl);
      // this.props.auth.first(this.state.first, firstErrorEl);
    })
  }

  onChangeEmail(e) {
    const emailTaken = document.getElementById('emailTaken');
    emailTaken.innerHTML = '';
    const emailErrorEl = document.getElementById('email');
    this.setState({
      email: e.target.value
    }, () => {
      // validate.email(this.state.email, emailErrorEl);
      // this.props.auth.email(this.state.email, emailErrorEl);
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
      // validate.password(this.state.password, this.state.repeatPassword, passwordErrorEl, repeatPasswordErrorEl);
      // this.props.auth.password(this.state.password, this.state.repeatPassword, passwordErrorEl, repeatPasswordErrorEl);
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
      // validate.repeatPassword(this.state.password, this.state.repeatPassword, passwordErrorEl, repeatPasswordErrorEl);
      // this.props.auth.repeatPassword(this.state.password, this.state.repeatPassword, passwordErrorEl, repeatPasswordErrorEl)
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
            axios.get('/spotify')
          } 
        })
      }
    }
  }

  render() {
    return (
      <div className='signUpBox'>
        <div className='signUpInputContainer'>
        <h2 className='signUpTitle'>Word of Mouth Sign Up</h2>
          <form className='form'>
            <h4 className='inputTitles'>First name</h4>
              <input className='inputBox' type="text" onKeyDown={this.submit.bind(this)} onChange={this.onChangeFirst.bind(this)} value={this.state.first}/>
              <span className={this.state.span1} id="firstName"></span>
            <h4 className='inputTitles'>Email address</h4>
              <input className='inputBox' id="emailInput" type="text" onKeyDown={this.submit.bind(this)} onChange={this.onChangeEmail.bind(this)}value={this.state.email}/>
              <span className={this.state.span2} id='email'></span>
            <h4 className='inputTitles'>Create a password</h4>
              <input className='inputBox' type="password" onKeyDown={this.submit.bind(this)} onChange={this.onChangePassword.bind(this)}value={this.state.password}/>
              <span className={this.state.span3} id='password'></span>
            <h4 className='inputTitles'>Repeat your password</h4>
              <input className='inputBox' type="password" onKeyDown={this.submit.bind(this)} onChange={this.onChangeRepeatPassword.bind(this)}value={this.state.repeatPassword}/>
              <span className={this.state.span4} id='repeatPassword'></span>
          </form>
        </div>
        <div className='emailTaken' id="emailTaken"></div>
      </div>
    )
  }
}

export default SignUp
