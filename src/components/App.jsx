import React, { Component } from 'react';

import Drivers from './Drivers';
import Heading from './Heading';
import Resolver  from './Resolver';
import Footer from './Footer';

export class App extends Component {

	constructor (props) {
		super(props);
		this.state = { drivers: [
			{name: 'did:btcr'},
			{name: 'did:sov'},
			{name: 'did:v1'},
			{name: 'did:ethr'},
			{name: 'did:nacl'},
			{name: 'did:web'},
			{name: 'did:jolo'},
			{name: 'did:erc725'},
			{name: 'did:ipid'},
			{name: 'did:elem'},
			{name: 'did:key'},
			{name: 'did:neoid'},
			{name: 'did:github'},
			{name: 'did:stack'},
			{name: 'did:hcr'},
			{name: 'did:ccp'},
			{name: 'did:work'},
			{name: 'did:ont'},
			{name: 'did:kilt'},
			{name: 'did:evan'},
			{name: 'did:echo'}
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
				<Heading />
				<Drivers drivers={this.state.drivers} />
				<Resolver did={did} />
				<Footer />
			</div>
		);
	}
}

export default App;
