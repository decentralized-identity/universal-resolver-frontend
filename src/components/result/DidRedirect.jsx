import React, { Component } from 'react';

import { Segment } from 'semantic-ui-react'

export class DidRedirect extends Component {

	render() {
		return (
			<Segment className='did-redirect'>
				REDIRECT: {this.props.redirect}
			</Segment>
		);
	}
}

export default DidRedirect;
