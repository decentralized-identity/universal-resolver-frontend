import React, { Component } from 'react';

import { Segment, Item, Card, Divider } from 'semantic-ui-react'

import QrCode from "./QrCode";
import DidUrl from './DidUrl';
import DidRedirect from './DidRedirect';
import Service from './Service';
import VerificationMethod from './VerificationMethod';

export class DidResult extends Component {

	render() {

		var qrcode = (
			<QrCode did={this.props.didResolutionMetadata.didUrl.did} />
		);

		var redirect = null;
		if (this.props.didDocumentMetadata.redirect) redirect = (
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
				selected={this.props.didResolutionMetadata.selectedServices ? this.props.didResolutionMetadata.selectedServices.includes(i) : null} />
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

		var didDocumentVerificationMethods;
		if (this.props.didDocument && Array.isArray(this.props.didDocument.verificationMethod)) didDocumentVerificationMethods = this.props.didDocument.verificationMethod;
		else if (this.props.didDocument && typeof this.props.didDocument.verificationMethod === 'object') didDocumentVerificationMethods = Array.of(this.props.didDocument.verificationMethod);
		else if (this.props.didDocument && Array.isArray(this.props.didDocument.authentication) && this.props.didDocument.authentication.length > 0 && Array.isArray(this.props.didDocument.authentication[0].verificationMethod)) didDocumentVerificationMethods = this.props.didDocument.authentication[0].verificationMethod;
		else if (this.props.didDocument && Array.isArray(this.props.didDocument.authentication) && this.props.didDocument.authentication.length > 0 && typeof this.props.didDocument.authentication[0].verificationMethod === 'object') didDocumentVerificationMethods = Array.of(this.props.didDocument.authentication[0].verificationMethod);
		else if (this.props.didDocument && Array.isArray(this.props.didDocument.authentication) && this.props.didDocument.authentication.length > 0) didDocumentVerificationMethods = Array.of(this.props.didDocument.authentication[0]);
		else didDocumentVerificationMethods = Array.of();

		var verificationMethodsList = didDocumentVerificationMethods.map((didDocumentVerificationMethod, i) =>
			<VerificationMethod
				key={i}
				id={didDocumentVerificationMethod.id}
				type={didDocumentVerificationMethod.type}
				publicKeyBase64={didDocumentVerificationMethod.publicKeyBase64}
				publicKeyBase58={didDocumentVerificationMethod.publicKeyBase58}
				publicKeyHex={didDocumentVerificationMethod.publicKeyHex}
				publicKeyPem={didDocumentVerificationMethod.publicKeyPem}
				publicKeyJwk={didDocumentVerificationMethod.publicKeyJwk}
				publicKeyPgp={didDocumentVerificationMethod.publicKeyPgp}
				ethereumAddress={didDocumentVerificationMethod.ethereumAddress}
				address={didDocumentVerificationMethod.address}
				selected={this.props.didResolutionMetadata.selectedKeys ? this.props.didResolutionMetadata.selectedKeys.includes(i) : null} />
		);
		if (Object.keys(verificationMethodsList).length > 0) verificationMethodsList = (
			<Item.Description>
				<Card.Group>
					{verificationMethodsList}
				</Card.Group>
			</Item.Description>
		); else verificationMethodsList = (
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

		const verificationMethods = verificationMethodsList && Object.keys(verificationMethodsList).length > 0 ? (
			<div>
				<Divider />
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>
								Verification Methods
							</Item.Header>
							{verificationMethodsList}
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
								<DidUrl didUrl={this.props.didResolutionMetadata.didUrl} />
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
				{services}
				{verificationMethods}
			</div>
		);
	}
}

export default DidResult;
