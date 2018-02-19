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
			<Service key={i} type={didDocumentService.type} serviceEndpoint={didDocumentService.serviceEndpoint} />
		);
    	var didDocumentPublicKeys;
    	if (Array.isArray(this.props.didDocument.publicKey)) didDocumentPublicKeys = this.props.didDocument.publicKey;
    	else if (typeof this.props.didDocument.publicKey === 'object') didDocumentPublicKeys = Array.of(this.props.didDocument.publicKey);
    	else didDocumentPublicKeys = Array.of();
		const publicKeys = didDocumentPublicKeys.map((didDocumentPublicKey, i) =>
			<PublicKey key={i} type={didDocumentPublicKey.type} publicKeyBase64={didDocumentPublicKey.publicKeyBase64} publicKeyBase58={didDocumentPublicKey.publicKeyBase58} publicKeyPem={didDocumentPublicKey.publicKeyPem} publicKeyHex={didDocumentPublicKey.publicKeyHex} />
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
