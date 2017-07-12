import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './modules/app/components/app.js';
import Login from './modules/app/login.js';
import SignUp from './modules/app/components/signUp.js';
import rootReducer from './root-reducer'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleWare(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);
import './style/index.scss'
console.log(store)

const router =(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={Login} />
        <Route path='/signup' component={SignUp} />
      </Route>
    </Router>
  </Provider>
  )

  ReactDOM.render(
    router, document.getElementById('app')
  );