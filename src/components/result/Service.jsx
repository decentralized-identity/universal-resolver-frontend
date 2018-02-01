import React, { Component } from 'react';

import { Card } from 'semantic-ui-react'

export class Service extends Component {

    render() {
        return (
        	<Card className='service'>
        		<Card.Content>
	        		<Card.Header>
	        			Service
	        		</Card.Header>
	        		<Card.Meta>
	        			{this.props.type}
	        		</Card.Meta>
	        		<Card.Description>
	        			{this.props.serviceEndpoint}
	        		</Card.Description>
        		</Card.Content>
            </Card>
        );
    }
}

export default Service;
