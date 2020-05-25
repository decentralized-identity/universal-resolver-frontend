import React, { Component } from 'react';

import { Segment, Item, Card, Divider } from 'semantic-ui-react'

import QrCode from "./QrCode";
import DidUrl from './DidUrl';
import DidRedirect from './DidRedirect';
import Service from './Service';
import PublicKey from './PublicKey';

export class DidResult extends Component {

	render() {

		var qrcode = (
			<QrCode did={this.props.resolverMetadata.didUrl.did} />
		);

		var redirect = null;
		if (this.props.methodMetadata.redirect) redirect = (
			<DidRedirect
				redirect={this.state.redirect} />
		);

		var didDocumentServices;
		if (this.props.didDocument && Array.isArray(this.props.didDocument.service)) didDocumentServices = this.props.didDocument.service;
		else if (this.props.didDocument && typeof this.props.didDocument.service === 'object') didDocumentServices = Array.of(this.props.didDocument.service);
		else didDocumentServices = Array.of();

		var servicesList = didDocumentServices.map((didDocumentService, i) =>
			<Service
				key={i}
				id={didDocumentService.id}
				type={didDocumentService.type}
				serviceEndpoint={didDocumentService.serviceEndpoint}
				selected={this.props.resolverMetadata.selectedServices ? this.props.resolverMetadata.selectedServices.includes(i) : null} />
		);
		if (Object.keys(servicesList).length > 0) servicesList = (
			<Item.Description>
				<Card.Group>
					{servicesList}
				</Card.Group>
			</Item.Description>
		); else servicesList = (
			<Item.Description>
				(none)
			</Item.Description>
		);

		var didDocumentPublicKeys;
		if (this.props.didDocument && Array.isArray(this.props.didDocument.publicKey)) didDocumentPublicKeys = this.props.didDocument.publicKey;
		else if (this.props.didDocument && typeof this.props.didDocument.publicKey === 'object') didDocumentPublicKeys = Array.of(this.props.didDocument.publicKey);
		else if (this.props.didDocument && Array.isArray(this.props.didDocument.authentication) && Array.isArray(this.props.didDocument.authentication[0].publicKey)) didDocumentPublicKeys = this.props.didDocument.authentication[0].publicKey;
		else if (this.props.didDocument && Array.isArray(this.props.didDocument.authentication) && typeof this.props.didDocument.authentication[0].publicKey === 'object') didDocumentPublicKeys = Array.of(this.props.didDocument.authentication[0].publicKey);
		else if (this.props.didDocument && Array.isArray(this.props.didDocument.authentication)) didDocumentPublicKeys = Array.of(this.props.didDocument.authentication[0]);
		else didDocumentPublicKeys = Array.of();

		var publicKeysList = didDocumentPublicKeys.map((didDocumentPublicKey, i) =>
			<PublicKey
				key={i}
				id={didDocumentPublicKey.id}
				type={didDocumentPublicKey.type}
				publicKeyBase64={didDocumentPublicKey.publicKeyBase64}
				publicKeyBase58={didDocumentPublicKey.publicKeyBase58}
				publicKeyHex={didDocumentPublicKey.publicKeyHex}
				publicKeyPem={didDocumentPublicKey.publicKeyPem}
				publicKeyJwk={didDocumentPublicKey.publicKeyJwk}
				publicKeyPgp={didDocumentPublicKey.publicKeyPgp}
				ethereumAddress={didDocumentPublicKey.ethereumAddress}
				address={didDocumentPublicKey.address}
				selected={this.props.resolverMetadata.selectedKeys ? this.props.resolverMetadata.selectedKeys.includes(i) : null} />
		);
		if (Object.keys(publicKeysList).length > 0) publicKeysList = (
			<Item.Description>
				<Card.Group>
					{publicKeysList}
				</Card.Group>
			</Item.Description>
		); else publicKeysList = (
			<Item.Description>
				(none)
			</Item.Description>
		);

		const services = (
			<div>
				<Divider />
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>
								Services
							</Item.Header>
							{servicesList}
						</Item.Content>
					</Item>
				</Item.Group>
			</div>
		);

		const publicKeys = publicKeysList && Object.keys(publicKeysList).length > 0 ? (
			<div>
				<Divider />
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>
								Public Keys
							</Item.Header>
							{publicKeysList}
						</Item.Content>
					</Item>
				</Item.Group>
			</div>
		) : null;

		return (
			<div className='did-result'>
				{qrcode}
				{redirect}
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>
								Parser
							</Item.Header>
							<Item.Description>
								<DidUrl didUrl={this.props.resolverMetadata.didUrl} />
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
				{services}
				{publicKeys}
			</div>
		);
	}
}

export default DidResult;
