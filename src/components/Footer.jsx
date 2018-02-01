import React, { Component } from 'react';

import { Segment, Grid, Image, Header } from 'semantic-ui-react'

export class Footer extends Component {

    render() {
        return (
        	<Segment className='footer'>
        		See <a href="https://github.com/decentralized-identity/universal-resolver/">here</a> for more information about the Universal Resolver.
			</Segment>
        );
    }

}

export default Footer;
