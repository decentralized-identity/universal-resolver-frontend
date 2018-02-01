import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class DidDocument extends Component {

    render() {
    	const didDocument = this.props.didDocument == '' ? '' : JSON.stringify(this.props.didDocument, null, 2);
        return (
        	<Highlight className='js'>
                {didDocument}
            </Highlight>
        );
    }
}

export default DidDocument;
