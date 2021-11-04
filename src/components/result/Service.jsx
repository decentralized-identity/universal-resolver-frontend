import React, { Component } from 'react';

import { Card, Icon } from 'semantic-ui-react'

export class Service extends Component {

	render() {
		const icon = this.props.selected ? 'wifi blue' : 'wifi';
		const type = this.props.type;
		const description = typeof this.props.serviceEndpoint === 'string' ? this.props.serviceEndpoint : JSON.stringify(this.props.serviceEndpoint);
		const id = this.props.id ? (
			<Card.Meta>
				{this.props.id}
			</Card.Meta>
		) : null;
		return (
			<Card className='service fluid'>
				<Card.Content>
					<Card.Header>
						<Icon className={icon} />
						{type}
					</Card.Header>
					{id}
					<Card.Description>
						{description}
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}

export default Service;
