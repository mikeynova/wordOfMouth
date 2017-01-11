import { FIRST_ERROR } from '../actions/index';

export default (state = 'original state', action) => {
  switch(action.type) {
    case FIRST_ERROR:
      return action.payload;
  };
  return state;
}
