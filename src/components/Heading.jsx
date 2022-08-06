import React, { Component } from 'react';

import { Segment, Image } from 'semantic-ui-react'

import WarningButton from './WarningButton';
import ConfigurationButton from "./ConfigurationButton";

export class Heading extends Component {

	render() {
		return (
			<Segment className='heading'>
				<WarningButton />
				<ConfigurationButton />
				<Image src='images/logo.jpg' alt={'DIF Universal Resolver'}/>
			</Segment>
		);
	}
}

export default Heading;
