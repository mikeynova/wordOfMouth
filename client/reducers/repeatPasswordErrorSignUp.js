import { REPEAT_PASSWORD_ERROR } from '../actions/signUpValidationActions';

export default (state = 'original state', action) => {
  switch(action.type) {
    case REPEAT_PASSWORD_ERROR:
      return action.payload;
  };
  return state;
}