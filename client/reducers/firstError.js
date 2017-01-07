import { FIRST_ERROR } from '../actions/index';

export default (state = {}, action) => {
  switch(action.type) {
    case FIRST_ERROR:
      return action.payload;
  };
  return state;
}
