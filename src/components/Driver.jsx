import React, { Component } from 'react';

import { Label } from 'semantic-ui-react'

export class Driver extends Component {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<Label className="driver">
				{this.props.name}
			</Label>
		);
	}
}

export default Driver;
