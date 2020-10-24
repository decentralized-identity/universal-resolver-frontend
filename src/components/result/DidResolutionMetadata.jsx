import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class DidResolutionMetadata extends Component {

	render() {
		const didResolutionMetadataString = this.props.didResolutionMetadata ? JSON.stringify(this.props.didResolutionMetadata, null, 2) : null;
		const didResolutionMetadata = didResolutionMetadataString ? (
			<Highlight className='js'>
				{didResolutionMetadataString}
			</Highlight>
		) : null;
		return didResolutionMetadata;
	}
}

export default DidResolutionMetadata;
