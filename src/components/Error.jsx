import React, { Component } from 'react';

export class Error extends Component {

	constructor (props) {
		super(props)
	}

    render() {
        return (
        	<p className="error">{this.props.text}</p>
        );
    }

}

export default Error;
