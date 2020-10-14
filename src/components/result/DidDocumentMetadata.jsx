import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class DidDocumentMetadata extends Component {

	render() {
		const didDocumentMetadataString = this.props.didDocumentMetadata ? JSON.stringify(this.props.didDocumentMetadata, null, 2) : null;
		const didDocumentMetadata = didDocumentMetadataString ? (
			<Highlight className='js'>
				{didDocumentMetadataString}
			</Highlight>
		) : null;
		return didDocumentMetadata;
	}
}

export default DidDocumentMetadata;
