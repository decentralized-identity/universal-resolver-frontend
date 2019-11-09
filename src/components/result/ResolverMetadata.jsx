import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class ResolverMetadata extends Component {

	render() {
		const resolverMetadataString = this.props.resolverMetadata ? JSON.stringify(this.props.resolverMetadata, null, 2) : null;
		const resolverMetadata = resolverMetadataString ? (
			<Highlight className='js'>
				{resolverMetadataString}
			</Highlight>
		) : null;
		return resolverMetadata;
	}
}

export default ResolverMetadata;
