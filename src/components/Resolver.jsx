import React, { Component } from 'react';

import ResolverInput from './ResolverInput';
import ResolverResult from './ResolverResult';

export class Resolver extends Component {

	constructor (props) {
		super(props);
		this.state = { result: '(none)' };
	}

    render() {
        return (
            <div className="resolver">
                <ResolverInput onResult={this.onResult.bind(this)} />
                <ResolverResult result={this.state.result} />
            </div>
        );
    }

    onResult(result) {
    	this.setState({ result: result });
	}
}

export default Resolver;
