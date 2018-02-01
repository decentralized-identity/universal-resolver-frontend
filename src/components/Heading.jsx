import React, { Component } from 'react';

import { Segment, Image } from 'semantic-ui-react'

export class Heading extends Component {

    render() {
        return (
        	<Segment className='heading'>
   				<Image src='images/logo.jpg' />
			</Segment>
        );
    }

}

export default Heading;
