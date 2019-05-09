import React, { Component } from 'react';

import { Item, Segment, Table } from 'semantic-ui-react'

export class DidUrl extends Component {

	render() {
		return (
			<Table collapsing className='did-url'>
			  <Table.Body>
				<Table.Row>
				  <Table.Cell singleLine>did</Table.Cell>
				  <Table.Cell singleLine>method</Table.Cell>
				  <Table.Cell singleLine>method-specific-id</Table.Cell>
				  <Table.Cell singleLine>path-abempty</Table.Cell>
				  <Table.Cell singleLine>query</Table.Cell>
				  <Table.Cell singleLine>fragment</Table.Cell>
				</Table.Row>
				<Table.Row className='values'>
				  <Table.Cell>{this.props.didUrl.did.didString}</Table.Cell>
				  <Table.Cell>{this.props.didUrl.did.method}</Table.Cell>
				  <Table.Cell>{this.props.didUrl.did.methodSpecificId}</Table.Cell>
				  <Table.Cell>{this.props.didUrl.path}</Table.Cell>
				  <Table.Cell>{this.props.didUrl.query}</Table.Cell>
				  <Table.Cell>{this.props.didUrl.fragment}</Table.Cell>
				</Table.Row>
			  </Table.Body>
			</Table>
		);
	}
}

export default DidUrl;
