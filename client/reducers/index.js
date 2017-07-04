import { combineReducers } from 'redux';
import reducer from './reducer.js';
import loginReducer from './loginReducer.js';
import signupReducer from './signupReducer.js';

const app = combineReducers({
	reducer,
	loginReducer,
	signupReducer
});

export default app;

