import React, { Component } from 'react';

import Drivers from './Drivers';
import Heading from './Heading';
import Resolver  from './Resolver';
import Footer from './Footer';

export class App extends Component {

	constructor (props) {
		super(props);
		this.state = { drivers: [
			{id: 'did-btcr', name: 'did:btcr'},
			{id: 'did-sov', name: 'did:sov'},
			{id: 'did-v1', name: 'did:v1'},
			{id: 'did-jolo', name: 'did:jolo'},
			{id: 'did-stack', name: 'did:stack'},
			{id: 'did-erc725', name: 'did:erc725'},
			{id: 'did-ipid', name: 'did:ipid'},
			{id: 'did-hacera', name: 'did:hcr'},
			{id: 'dns-did', name: 'dns-did'}
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
