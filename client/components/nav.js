import React, { Component } from 'react';
import TopMusic from './topMusic.js';

export default class Login extends Component {
	render() {
		return (
			<div>
				<div className='nav'>
					<h1 className='appName'>Word of Mouth</h1>
					<img className='logo' src="../assets/yell.png" alt=""/>
				</div>
				<TopMusic />
			</div>
		)
	}
}