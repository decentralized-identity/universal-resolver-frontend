import React, { Component } from 'react';

import { Menu, Item } from 'semantic-ui-react'

import ConfigurationButton from './ConfigurationButton';
import Driver from './Driver';

export class Drivers extends Component {

	constructor (props) {
		super(props);
	}

	render() {
		const drivers = this.props.drivers.map((driver, i) =>
			<Driver key={i} name={driver.name} />
		);
		return (
			<>
				<ConfigurationButton />
				<div className="drivers-container">
					<div className="drivers-container-label">
						Supported methods:
					</div>
					<div className="drivers">
						{drivers}
						<a target="_blank" href="https://github.com/decentralized-identity/universal-resolver/blob/master/docs/driver-development.md">+ Add your driver?</a>
					</div>
				</div>
			</>
		);
	}
}

export default Drivers;
