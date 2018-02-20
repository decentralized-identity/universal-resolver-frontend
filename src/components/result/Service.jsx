import React, { Component } from 'react';

import { Card } from 'semantic-ui-react'

export class Service extends Component {

	render() {
		const color = this.props.selected ? 'red' : null;
		const name = this.props.name ? (
			<Card.Meta>
				"{this.props.name}"
			</Card.Meta>
		) : null;
		const type = this.props.type ? (
			<Card.Meta>
				{this.props.type}
			</Card.Meta>
		) : null;
		return (
			<Card className='service' color={color}>
				<Card.Content>
					<Card.Header>
						Service
					</Card.Header>
					{name}
					{type}
					<Card.Description>
						{this.props.serviceEndpoint}
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}

export default Service;
