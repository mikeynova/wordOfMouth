import { combineReducers } from 'redux';
import artistReducer from './artistReducer';

const rootReducer = combineReducers({
	artists: artistReducer
})

export default rootReducer;