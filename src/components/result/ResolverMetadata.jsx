import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class ResolverMetadata extends Component {

    render() {
    	const resolverMetadata = this.props.resolverMetadata == '' ? '' : JSON.stringify(this.props.resolverMetadata, null, 2);
        return (
        	<Highlight className='js'>
                {resolverMetadata}
            </Highlight>
        );
    }
}

export default ResolverMetadata;
