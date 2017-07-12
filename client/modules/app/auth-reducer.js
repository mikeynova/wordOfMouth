import { EMAIL_ERROR, FIRST_ERROR, LAST_ERROR, PASSWORD_ERROR, REPEAT_PASSWORD_ERROR } from './auth-actions';

const initialState = {
  emailError: 'no error',
  firstNameError: 'no error',
  lastNameError: 'no error',
  passwordError: 'no error',
  repeatPasswordError: 'no error',
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case EMAIL_ERROR:
      return action.payload;
    case FIRST_ERROR:
      return { ...state, firstNameError: action.payload };
    case LAST_ERROR:
      return { ...state, lastNameError: action.payload };
    case PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
    case REPEAT_PASSWORD_ERROR:
      return { ...state, repeatPasswordError: action.payload };
    default:
      return state;
  };
}

export const getEmailError = state => state.authReducer.emailError
export const getFirstNameError = state => state.authReducer.firstNameError
export const getLastNameError = state => state.authReducer.lastNameError
export const getPasswordError = state => state.authReducer.passwordError
export const getRepeatPasswordError = state => state.authReducer.repeatPasswordError

export default authReducer


