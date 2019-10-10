import React, { Component } from 'react';
import axios from 'axios';

import { Item, Button, Modal, Header, Divider, Icon } from 'semantic-ui-react'

export class WarningButton extends Component {

	render() {
		const button = (
			<Button className="warning-button orange icon right floated"><Icon className="exclamation triangle" /></Button>
		);
		return (
			<Modal trigger={button}>
				<Modal.Header>
					<Icon className="orange exclamation triangle" />
					Warning
				</Modal.Header>
				<Modal.Content>
					<Modal.Description>
						<p>Before using the Universal Resolver, make sure you understand two things:</p>
						<Header>1. It's experimental</Header>
						<p>Decentralized Identifiers (DIDs) are currently being developed by the <a href="https://www.w3.org/2019/did-wg/">
						W3C Decentralized Identifier Working Group</a>. The <a href="https://w3c.github.io/did-spec/">DID</a> and <a href="https://w3c-ccg.github.io/did-resolution/">DID
						Resolution</a> specifications are
						constantly evolving, and so is the Universal
						Resolver implementation. Understand that
						everything about DIDs and the Universal Resolver is subject to change at any time.</p>
						<Header>2. Don't rely on the public instance</Header>
						<p>DIDs and DID Resolution are by definition meant to be decentralized. Under the <strong>uniresolver.io</strong> domain
						name we are running an instance of the Universal Resolver, but you should not rely on this
						instance for anything other than development and non-critical demos. From your perspective,
						you should treat <strong>uniresolver.io</strong> as an untrusted third party that could theoretically manipulate
						DID Resolution results. Instead, you should run your own instance of the Universal Resolver
						or other DID Resolution tools to integrate with your applications and services.</p>
						<Divider/>
						<p>
						<Icon className="blue info circle" />
						See <a href="https://github.com/decentralized-identity/universal-resolver/">here</a> for
						more information about the Universal Resolver.</p>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		);
	}
}

export default WarningButton;
