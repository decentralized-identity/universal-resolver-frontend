import React, { Component } from 'react';

import { Card, Divider } from 'semantic-ui-react'

import DidReference from './DidReference';
import Service from './Service';
import PublicKey from './PublicKey';

export class DidResult extends Component {

    render() {
    	var didDocumentServices;
    	if (Array.isArray(this.props.didDocument.service)) didDocumentServices = this.props.didDocument.service;
    	else if (typeof this.props.didDocument.service === 'object') didDocumentServices = Array.of(this.props.didDocument.service);
    	else didDocumentServices = Array.of();
		const services = didDocumentServices.map((didDocumentService, i) =>
			<Service key={i} name={didDocumentService.name} type={didDocumentService.type} serviceEndpoint={didDocumentService.serviceEndpoint} selected={this.props.resolverMetadata.selectedServices ? this.props.resolverMetadata.selectedServices.includes(i) : null} />
		);
    	var didDocumentPublicKeys;
    	if (Array.isArray(this.props.didDocument.publicKey)) didDocumentPublicKeys = this.props.didDocument.publicKey;
    	else if (typeof this.props.didDocument.publicKey === 'object') didDocumentPublicKeys = Array.of(this.props.didDocument.publicKey);
		else if (typeof this.props.didDocument.authentication === 'object' && Array.isArray(this.props.didDocument.authentication.publicKey)) didDocumentPublicKeys = this.props.didDocument.authentication.publicKey;
		else if (typeof this.props.didDocument.authentication === 'object' && typeof this.props.didDocument.authentication.publicKey === 'object') didDocumentPublicKeys = Array.of(this.props.didDocument.authentication.publicKey);
    	else didDocumentPublicKeys = Array.of();
		const publicKeys = didDocumentPublicKeys.map((didDocumentPublicKey, i) =>
			<PublicKey key={i} type={didDocumentPublicKey.type} publicKeyBase64={didDocumentPublicKey.publicKeyBase64} publicKeyBase58={didDocumentPublicKey.publicKeyBase58} publicKeyPem={didDocumentPublicKey.publicKeyPem} publicKeyHex={didDocumentPublicKey.publicKeyHex} ethereumAddress={didDocumentPublicKey.ethereumAddress} address={didDocumentPublicKey.address} />
		);
        return (
        	<div className='did-result'>
        		<DidReference didReference={this.props.didReference} />
        		<Divider />
	        	<Card.Group>
	        		{services}
	        	</Card.Group>
        		<Divider />
	        	<Card.Group>
	        		{publicKeys}
	        	</Card.Group>
        	</div>
        );
    }
}

export default DidResult;
