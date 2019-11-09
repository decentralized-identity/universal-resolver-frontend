import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class MethodMetadata extends Component {

	render() {
		const methodMetadataString = this.props.methodMetadata ? JSON.stringify(this.props.methodMetadata, null, 2) : null;
		const methodMetadata = methodMetadataString ? (
			<Highlight className='js'>
				{methodMetadataString}
			</Highlight>
		) : null;
		return methodMetadata;
	}
}

export default MethodMetadata;
