import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class DidDocument extends Component {

	render() {
		const didDocumentString = this.props.didDocument ? JSON.stringify(this.props.didDocument, null, 2) : null;
		const didDocument = didDocumentString ? (
			<Highlight className='js'>
				{didDocumentString}
			</Highlight>
		) : null;
		return didDocument;
	}
}

export default DidDocument;
