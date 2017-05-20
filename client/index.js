import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

import AuthValidation from './helpers/signUpValidation'
import App from './components/app.js';
import Login from './components/login.js';
import SignUp from './components/signUp.js';

const auth = new AuthValidation()
// creating instance of auth to inject new props inrto root of the app

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleWare(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);
export const dispatch = store.dispatch;

const router =(
		<Provider store={store}>
	    <Router history={browserHistory} >
	      <Route path='/' component={App} auth={auth}>
	      	<IndexRoute component={Login} />
	      	<Route path='/signup' component={SignUp} />
	      	<Route component={AuthValidation} />
	      </Route> 
	    </Router>
		</Provider>
  ) 

  ReactDOM.render(
    router, document.getElementById('app')
  );