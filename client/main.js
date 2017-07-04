import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

import reducer from './reducers';
import initialState from './initialState.js';

const middleware = applyMiddleware(createLogger(), thunk);
const store = createStore(reducer, middleware);

const app = document.getElementById('app');

ReactDOM.render((
	<Provider store={store}>
	    <Router >
	   		<App/>
	    </Router>
    </Provider>
), app);
