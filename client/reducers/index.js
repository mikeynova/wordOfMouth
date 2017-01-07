import { combineReducers } from 'redux';
import firstError from './firstError';

const rootReducer = combineReducers({
	firstError: firstError
})

export default rootReducer;