import React, { Component } from 'react';
import axios from 'axios';

export default class TopMusic extends Component {

	componentDidMount() {
		axios.get('/top_artists')
			.then(function(response) {
				console.log(response);
			})
	}

		

	render() {
		return (
			<div>
				<h1>TESTER</h1>
			</div>
		)
	}
}