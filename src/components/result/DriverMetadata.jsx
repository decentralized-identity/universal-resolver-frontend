import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class DriverMetadata extends Component {

    render() {
    	const driverMetadata = this.props.driverMetadata == '' ? '' : JSON.stringify(this.props.driverMetadata, null, 2);
        return (
        	<Highlight className='js'>
                {driverMetadata}
            </Highlight>
        );
    }
}

export default DriverMetadata;
