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

	// constructor(props) {
	// 	super(props);
		
	// 	this.state = {
	// 		artist: axios.get('/top_artists')
	// 		.then(response => {
	// 			return response.data
	// 			// this.setState({
	// 			// 	test: response.data
	// 			// }, this.topArtists())
	// 		})
	// 	};
		// this.topArtists = this.topArtists.bind(this);
		// this.solo = this.solo.bind(this)
		// this.test = this.test.bind(this);
	// }

	componentWillMount() {
		// axios.get('/top_artists')
		// 	.then(response => {
		// 		this.topArtists(response.data)
		// 		// this.setState({
		// 		// 	test: response.data
		// 		// }, this.topArtists())
		// 	})
				// console.log(this.state.artist)
				// console.log(some)

	}
	
	// componentDidMount() {
	// 	// setTimeout(this.timeout, 2000)
	// 	console.log(this.props, 'THE PROPS')
	// 	this.props.getArtists()
	// }

	componentWillReceiveProps(props) {
		// console.log(props)
	}

	timeout() {
		// console.log(this.state, 'hihiihihiih')
	}

	topArtists(data) {
		// console.log(data)
		// console.log(this.state)
		// return _.map(data, function(artist) {
		// 	return <div>{artist.name}</div>
		// })
		// window.setTimeout(function(){console.log(this.state)}, 2000);
		// return <h1>hello from topArtists</h1>
		// this.solo()
	}

	




	solo() {
		const soloStyle = {
			color: "blue"
		}
		return <h1 style={soloStyle}>hello solo manersjkdflsdhf</h1>
	}

		
				// {this.solo.bind(this)()}

	render() {
		return(
			<div>
				{this.solo()}
			</div>
		)
		
	}
}

// const mapStateToProps = state => {
//   return {
//     markers: {}
//   }
// }

// function mapDispatchToProps(){
//   return bindActionCreators({ getArtists });
// }

// export default connect(mapDispatchToProps)(TopMusic);