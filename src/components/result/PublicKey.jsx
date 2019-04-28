import React, { Component } from 'react';

import { Card, Icon } from 'semantic-ui-react'

export class PublicKey extends Component {

    render() {
		const icon = this.props.selected ? 'key blue' : 'key';
		var publicKey;
		if (this.props.publicKeyBase64) publicKey = this.props.publicKeyBase64;
		else if (this.props.publicKeyBase58) publicKey = this.props.publicKeyBase58;
		else if (this.props.publicKeyHex) publicKey = this.props.publicKeyHex;
		else if (this.props.publicKeyPem) publicKey = this.props.publicKeyPem;
		else if (this.props.ethereumAddress) publicKey = this.props.ethereumAddress;
		else if (this.props.address) publicKey = this.props.address;
		else publicKey = '(no value)';
		publicKey = publicKey.match(/.{1,32}/g).join(' ');
		const id = this.props.id ? (
			<Card.Meta>
				{this.props.id}
			</Card.Meta>
		) : null;
        return (
        	<Card className='publickey fluid'>
        		<Card.Content>
	        		<Card.Header>
						<Icon className={icon} />
	        			{this.props.type}
	        		</Card.Header>
					{id}
	        		<Card.Description>
	        			{publicKey}
	        		</Card.Description>
        		</Card.Content>
            </Card>
        );
    }
}

export default PublicKey;
