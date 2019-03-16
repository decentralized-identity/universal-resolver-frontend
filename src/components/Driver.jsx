import React, { Component } from 'react';

import { Item } from 'semantic-ui-react'

export class Driver extends Component {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<Item className="driver">
				{this.props.id}
			</Item>
		);
	}
}

export default Driver;
