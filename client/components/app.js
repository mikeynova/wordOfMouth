import React, { Component } from 'react';

export default class App extends Component {
	render() {
		let children = null
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
      // Clone and return a new React element using element as the starting point. The resulting element will have the original element's props with the new props merged in shallowly. New children will replace existing children. key and ref from the original element will be preserved.
    }
		return (
			<div>
				{children}
			</div>
		)
	}
}