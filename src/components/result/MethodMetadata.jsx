import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class MethodMetadata extends Component {

    render() {
        const methodMetadata = this.props.methodMetadata == '' ? '' : JSON.stringify(this.props.methodMetadata, null, 2);
        return (
        	<Highlight className='js'>
                {methodMetadata}
            </Highlight>
        );
    }
}

export default MethodMetadata;
