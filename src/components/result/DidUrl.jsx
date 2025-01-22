import React, { Component } from 'react';

import { Item, Segment, Table } from 'semantic-ui-react'

export class DidUrl extends Component {

	render() {

		var didCells;
		if (this.props.did) didCells = [
			(<Table.Cell>{this.props.did.didString}</Table.Cell>),
			(<Table.Cell>{this.props.did.method}</Table.Cell>),
			(<Table.Cell>{this.props.did.methodSpecificId}</Table.Cell>)
		];

		var didUrlCells;
		if (this.props.didUrl) didUrlCells = [
			(<Table.Cell>{this.props.didUrl ? this.props.didUrl.path : null}</Table.Cell>),
			(<Table.Cell>{this.props.didUrl ? this.props.didUrl.query : null}</Table.Cell>),
			(<Table.Cell>{this.props.didUrl ? this.props.didUrl.fragment : null}</Table.Cell>)
		];

		return (
			<Table collapsing className='did-url'>
				<Table.Header>
					<Table.Row className='header'>
						<Table.HeaderCell singleLine>did</Table.HeaderCell>
						<Table.HeaderCell singleLine>method</Table.HeaderCell>
						<Table.HeaderCell singleLine>method-specific-id</Table.HeaderCell>
						<Table.HeaderCell singleLine>path-abempty</Table.HeaderCell>
						<Table.HeaderCell singleLine>query</Table.HeaderCell>
						<Table.HeaderCell singleLine>fragment</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row className='body'>
						{didCells}
						{didUrlCells}
					</Table.Row>
				</Table.Body>
			</Table>
		);
	}
}

export default DidUrl;
