import React, { Component } from 'react';

import Drivers from './Drivers';
import Heading from './Heading';
import Resolver  from './Resolver';
import Footer from './Footer';
import axios from "axios";
import {getBackendUrl} from "./utils";

export class App extends Component {

	constructor (props) {
		super(props);
		let drivers = ['did:sov', 'did:key'];
		let examples = [
			'did:sov:WRfXPg8dantKVubE3HX8pw',
			'did:key:z6Mkfriq1MqLBoPWecGoDLjguo1sB9brj6wT3qZ5BxkKpuP6',
		];
		let validity = {
			'did:sov': { 'status': 'partially-compliant' },
			'did:key': { 'status': 'compliant' }
		}
		this.state = { drivers: drivers, examples: examples, validity: validity };
	}

	componentDidMount() {
		axios
			.get( getBackendUrl() + '1.0/methods')
			.then(response => {
				let drivers = response.data.map(method => 'did:' + method);
				drivers = [...new Set(drivers)];
				drivers.sort();
				this.setState({ drivers: drivers });
			})
			.catch(error => {
				if (error.request) {
					console.log("Cannot retrieve methods: " + String(error) + ": " + JSON.stringify(error.request));
				} else if (error.message) {
					console.log("Cannot retrieve methods: " + error.message);
				} else {
					console.log("Cannot retrieve methods: " + String(error));
				}
			});
		axios
			.get( getBackendUrl() + '1.0/testIdentifiers')
			.then(response => {
				let examples = Object.values(response.data).reduce((acc, testIdentifiers) => [...acc, ...testIdentifiers]);
				examples = [...new Set(examples)];
				examples.sort();
				this.setState({ examples: examples });
			})
			.catch(error => {
				if (error.request) {
					console.log("Cannot retrieve test identifiers: " + String(error) + ": " + JSON.stringify(error.request));
				} else if (error.message) {
					console.log("Cannot retrieve test identifiers: " + error.message);
				} else {
					console.log("Cannot retrieve test identifiers: " + String(error));
				}
			});
		axios
			.get( 'https://identity.foundation/universal-resolver/result.json')
			.then(response => {
				let validity = response.data;
				this.setState({ validity: validity });
			})
			.catch(error => {
				if (error.request) {
					console.log("Cannot retrieve validity: " + String(error) + ": " + JSON.stringify(error.request));
				} else if (error.message) {
					console.log("Cannot retrieve validity: " + error.message);
				} else {
					console.log("Cannot retrieve validity: " + String(error));
				}
			});
	}

	render() {
		var input;
		var options;
		var autoResolve;
		if (this.props.location.hash) {
			if (this.props.location.hash.indexOf("#did=") === 0) {
				input = this.props.location.hash.substr("#did=".length);
			} else {
				input = this.props.location.hash.substr(1);
			}
			options = {};
			autoResolve = true;
		} else {
			input = 'did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736';
			options = {};
			autoResolve = false;
		}
		return (
			<div className="app">
				<Heading />
				<Drivers drivers={this.state.drivers} validity={this.state.validity} />
				<Resolver input={input} options={options} autoResolve={autoResolve} examples={this.state.examples} />
				<Footer />
			</div>
		);
	}
}

export default App;
