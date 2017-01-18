import { LAST_ERROR } from '../actions/signUpValidationActions';

export default (state = 'original state', action) => {
  switch(action.type) {
    case LAST_ERROR:
      return action.payload;
  };
  return state;
}