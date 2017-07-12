import { combineReducers } from 'redux';
import authReducer from './modules/app/auth-reducer';

const rootReducer = combineReducers({
  authReducer,
})

export default rootReducer;
