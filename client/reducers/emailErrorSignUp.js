import { EMAIL_ERROR } from '../actions/signUpValidationActions';

export default (state = 'original state', action) => {
  switch(action.type) {
    case EMAIL_ERROR:
      return action.payload;
  };
  return state;
}
