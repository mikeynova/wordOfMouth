import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';
import * as actions from '../actions/index'
import { getArtists } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class TopMusic extends Component {
	  constructor(props) {
    super(props)
    this.state = {
    }
    
  }

	solo() {
		const soloStyle = {
			color: "blue"
		}
		return <h1 style={soloStyle}>hello solo manersjkdflsdhf</h1>
	}

	render() {
		return(
			<div>
				{this.solo()}
			</div>
		)
		
	}
}