import React, { Component } from 'react';

import { Item, Segment, Table } from 'semantic-ui-react'

export class DidReference extends Component {

    render() {
        return (
        <Item.Group>
        	<Item className='did-reference'>
        		<Item.Content>
	        		<Item.Header>
	        			Parser
	        		</Item.Header>
	        		<Item.Description>
  <Table collapsing>
    <Table.Body>
      <Table.Row>
        <Table.Cell singleLine>DID</Table.Cell>
        <Table.Cell singleLine>Method</Table.Cell>
        <Table.Cell singleLine>ID</Table.Cell>
        <Table.Cell singleLine>Service</Table.Cell>
        <Table.Cell singleLine>Path</Table.Cell>
        <Table.Cell singleLine>Query</Table.Cell>
        <Table.Cell singleLine>Fragment</Table.Cell>
      </Table.Row>
      <Table.Row className='values'>
        <Table.Cell>{this.props.didReference.did}</Table.Cell>
        <Table.Cell>{this.props.didReference.method}</Table.Cell>
        <Table.Cell>{this.props.didReference.specificId}</Table.Cell>
        <Table.Cell>{this.props.didReference.service}</Table.Cell>
        <Table.Cell>{this.props.didReference.path}</Table.Cell>
        <Table.Cell>{this.props.didReference.query}</Table.Cell>
        <Table.Cell>{this.props.didReference.fragment}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  				</Item.Description>
  			</Item.Content>
  		</Item>
  		</Item.Group>
/*  	<Segment>
			  <List divided horizontal size='big' className='did-reference'>
			    <List.Item>
			      <List.Content verticalAlign='top'>
			        <List.Header>DID</List.Header>
			        {this.props.didReference.did}
			      </List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content verticalAlign='top'>
			        <List.Header>Method</List.Header>
			        {this.props.didReference.method}
			      </List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content verticalAlign='top'>
			        <List.Header>ID</List.Header>
			        {this.props.didReference.specificId}
			      </List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content verticalAlign='top'>
			        <List.Header>Name</List.Header>
			        {this.props.didReference.name}
			      </List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content verticalAlign='top'>
			        <List.Header>Path</List.Header>
			        {this.props.didReference.path}
			      </List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content verticalAlign='top'>
			        <List.Header>Query</List.Header>
			        {this.props.didReference.query}
			      </List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content verticalAlign='top'>
			        <List.Header>Fragment</List.Header>
			        {this.props.didReference.fragment}
			      </List.Content>
			    </List.Item>
			  </List>
			  </Segment>*/
		);
    }
}

export default DidReference;
