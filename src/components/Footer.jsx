import React, { Component } from 'react';

import { Segment, Grid, Image, Header, Icon } from 'semantic-ui-react'

export class Footer extends Component {

	render() {
		return (
			<Segment className='footer'>
				<Icon className="blue info circle" />
				See <a href="https://github.com/decentralized-identity/universal-resolver/">here</a> for more information about the Universal Resolver.
			</Segment>
		);
	}
}

export default Footer;
