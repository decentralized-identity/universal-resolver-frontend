import React, { Component } from 'react';

import Drivers from './Drivers';
import Heading from './Heading';
import Resolver  from './Resolver';
import Footer from './Footer';
import axios from "axios";
import {determineHostName} from "./utils";

export class App extends Component {

	constructor (props) {
		super(props);
		let drivers = ['did:sov', 'did:key'];
		let examples = [
			'did:sov:WRfXPg8dantKVubE3HX8pw',
			'did:key:z6Mkfriq1MqLBoPWecGoDLjguo1sB9brj6wT3qZ5BxkKpuP6',
		];
		this.state = { drivers: drivers, examples: examples };
	}

	componentDidMount() {
		axios
			.get( determineHostName() + '1.0/methods')
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
			.get( determineHostName() + '1.0/testIdentifiers')
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
	}

	render() {
		var input;
		var autoResolve;
		if (this.props.location.hash) {
			if (this.props.location.hash.indexOf("#did=") == 0) {
				input = this.props.location.hash.substr("#did=".length);
			} else {
				input = this.props.location.hash.substr(1);
			}
			autoResolve = true;
		} else {
			input = 'did:ion:EiClkZMDxPKqC9c-umQfTkR8vvZ9JPhl_xLDI9Nfk38w5w';
			autoResolve = false;
		}
		return (
			<div className="app">
				<Heading />
				<Drivers drivers={this.state.drivers} />
				<Resolver input={input} autoResolve={autoResolve} examples={this.state.examples} />
				<Footer />
			</div>
		);
	}
}

export default App;
