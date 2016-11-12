import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import App from './components/app.js';
import Nav from './components/nav.js';

const router =(
    <Router history={browserHistory} >
      <Route path='/' component={App} >
      	<IndexRoute component={Nav}></IndexRoute>
      </Route>
    </Router>
  ) 

  ReactDOM.render(
    router, document.getElementById('app')
  );