import { connect } from 'react-redux'

import { getEmailError, getFirstNameError, getLastNameError, getPasswordError, getRepeatPasswordError } from './auth-reducer'
import { firstNameError, lastNameError, emailError, passwordError, repeatPasswordError } from './auth-actions'

import Login from './components/login.js'
import SignUp from './components/signup.js'
import SignUpValidation from './signUpValidation.js'
console.log('ASHKDLHSDFVHLJSDFVHJSDFJBK')

function mapStateToProps(state) {
  return {
    emailError: getEmailError(state),
    firstNameError: getFirstNameError(state),
    lastNameError: getLastNameError(state),
    passwordError: getPasswordError(state),
    repeatPasswordError: getRepeatPasswordError(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doFirstNameError: (first) => dispatch(firstNameError(first)),
    doLastNameError: (last) => dispatch(lastNameError(last)),
    doEmailError: (email) => dispatch(emailError(email)),
    doPasswordError: (password) => dispatch(passwordError(password)),
    doRepeatPasswordError: (repeatPassword) => dispatch(repeatPasswordError(repeatPassword)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp)
// export const SignUpValidation = connect(mapStateToProps, mapDispatchToProps)(SignUpValidation)