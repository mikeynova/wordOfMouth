import { TOP_ARTISTS } from '../actions/index';

export default (state = {}, action) => {
  switch(action.type) {
    case TOP_ARTISTS:
      return action.payload;
  };
  return state;
}
