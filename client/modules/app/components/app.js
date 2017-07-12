import React, { Component } from 'react';
import SignUp from './signUp';

export default class App extends Component {


  componentDidMount() {
    console.log(this.props.children, 'children')
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}