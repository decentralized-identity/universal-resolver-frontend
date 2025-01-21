import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class DidMetadata extends Component {

	render() {
		const didMetadataString = this.props.didMetadata ? JSON.stringify(this.props.didMetadata, null, 2) : null;
		const didMetadata = didMetadataString ? (
			<Highlight className='js'>
				{didMetadataString}
			</Highlight>
		) : null;
		return didMetadata;
	}
}

export default DidMetadata;
