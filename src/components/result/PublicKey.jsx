import React, { Component } from 'react';

import { Card } from 'semantic-ui-react'

export class PublicKey extends Component {

    render() {
		var publicKey;
		if (this.props.publicKeyBase64) publicKey = this.props.publicKeyBase64;
		else if (this.props.publicKeyBase58) publicKey = this.props.publicKeyBase58;
		else if (this.props.publicKeyHex) publicKey = this.props.publicKeyHex;
		else if (this.props.publicKeyPem) publicKey = this.props.publicKeyPem;
		else if (this.props.ethereumAddress) publicKey = this.props.ethereumAddress;
		else if (this.props.address) publicKey = this.props.address;
		else publicKey = '(no value)';
        return (
        	<Card className='publickey'>
        		<Card.Content>
	        		<Card.Header>
	        			Public Key
	        		</Card.Header>
	        		<Card.Meta>
	        			{this.props.type}
	        		</Card.Meta>
	        		<Card.Description>
	        			{publicKey.match(/.{1,32}/g).join(' ')}
	        		</Card.Description>
        		</Card.Content>
            </Card>
        );
    }
}

export default PublicKey;
