import React, { Component } from 'react';

import Drivers from './Drivers';
import Heading from './Heading';
import Resolver  from './Resolver';
import Footer from './Footer';

export class App extends Component {

	constructor (props) {
		super(props);
		this.state = { drivers: [
			{key: 'did:btcr', name: 'did:btcr'}, 
			{key: 'did:sov', name: 'did:sov'},
			{key: 'did:v1', name: 'did:v1'},
			{key: 'did:uport', name: 'did:uport'},
			{key: 'did:jolo', name: 'did:jolo'},
			{key: 'did:stack', name: 'did:stack'},
			{key: 'did:erc725', name: 'did:erc725'},
			{key: 'did:ipid', name: 'did:ipid'},
			{key: 'did:dom', name: 'did:dom'},
			{key: 'dns-did', name: 'dns-did'}
		] };
	}

    render() {
		var did = null;
		if (this.props.location.hash) {
			if (this.props.location.hash.indexOf("#did=") == 0) {
				did = this.props.location.hash.substr("#did=".length);
			} else {
				did = this.props.location.hash.substr(1);
			}
		}
        return (
			<div className="app">
                <Drivers drivers={this.state.drivers} />
				<Heading />
				<Resolver did={did} />
				<Footer />
			</div>
        );
    }
}

export default App;
