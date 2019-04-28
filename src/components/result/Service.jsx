import React, { Component } from 'react';

import { Card, Icon } from 'semantic-ui-react'

export class Service extends Component {

	render() {
		const icon = this.props.selected ? 'wifi blue' : 'wifi';
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
						{this.props.type}
					</Card.Header>
					{id}
					<Card.Description>
						{this.props.serviceEndpoint}
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}

export default Service;
