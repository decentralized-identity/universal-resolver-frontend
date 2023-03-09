import React, { Component } from 'react';

import { Label } from 'semantic-ui-react'

import Driver from './Driver';

export class Drivers extends Component {

	constructor (props) {
		super(props);
	}

	render() {
		const validity = this.props.validity;
		const drivers = this.props.drivers.map((driver, i) =>
			<span key={i} className="driver-container">
				<Driver name={driver} validity={validity[driver]} />
			</span>
		);
		return (
			<div>
				<div className="drivers">
					<Label className="drivers-label" basic>
						Supported methods:
					</Label>
					{drivers}
					<a target="_blank" href="https://github.com/decentralized-identity/universal-resolver/blob/master/docs/driver-development.md">Contribute a driver?</a>
				</div>
			</div>
		);
	}
}

export default Drivers;
