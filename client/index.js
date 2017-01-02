import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

import App from './components/app.js';
import Login from './components/login.js';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
// export const store = createStoreWithMiddleWare(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

const router =(
		<Provider store={createStoreWithMiddleWare(rootReducer)}>
	    <Router history={browserHistory} >
	      <Route path='/' component={App} >
	      	<IndexRoute component={Login}></IndexRoute>
	      </Route>
	    </Router>
		</Provider>
  ) 

  ReactDOM.render(
    router, document.getElementById('app')
  );