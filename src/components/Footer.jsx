import React, { Component } from 'react';

import { Button, Segment, Icon } from 'semantic-ui-react'

import WarningPopup from './WarningPopup';

export class Footer extends Component {

	render() {
		const link = (
			<a>here</a>
		);
		return (
			<Segment className='footer'>
				<Icon className="blue info circle" />
				See <a href="https://github.com/decentralized-identity/universal-resolver/">here</a> for more information about the Universal Resolver.
				Warning - this is a non-production service. See <WarningPopup trigger={link} />.
			</Segment>
		);
	}
}

export default Footer;
