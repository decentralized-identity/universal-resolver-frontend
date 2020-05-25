import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import axios from 'axios';

import { Item, Column, Input, Button, Dropdown } from 'semantic-ui-react'

export class ResolverInput extends Component {

	constructor(props) {
		super(props);
		const did = this.props.did ? this.props.did : this.props.examples[0];
		this.state = { input: did, example: '' };
	}

	resolve() {
		axios
			.get(env.backendUrl + '1.0/identifiers/' + encodeURIComponent(this.state.input))
			.then(response => {
				const didDocument = response.data.didDocument;
				const resolverMetadata = response.data.resolverMetadata;
				const methodMetadata = response.data.methodMetadata;
				this.props.onResult(didDocument, resolverMetadata, methodMetadata);
			})
			.catch(error => {
				if (error.response && error.response.data) {
					var errorString;
					if (error.response.status === 404)
						errorString = "No result for " + this.state.input;
					else
						errorString = String(error);
					if (typeof error.response.data === 'object') {
						const didDocument = error.response.data.didDocument;
						const resolverMetadata = error.response.data.resolverMetadata;
						const methodMetadata = error.response.data.methodMetadata;
						this.props.onError(errorString, didDocument, resolverMetadata, methodMetadata);
					} else {
						this.props.onError(errorString + ': ' + error.response.data);
					}
				} else if (error.request) {
					this.props.onError(String(error) + ": " + JSON.stringify(error.request));
				} else if (error.message) {
					this.props.onError(error.message);
				} else {
					this.props.onError(String(error));
				}
			});
	}

	componentDidMount() {
		if (this.props.did) {
			this.props.onLoading();
			this.resolve();
		}
	}

	onClickResolve() {
		this.props.onLoading();
		this.resolve();
	}

	onClickClear() {
		this.props.onClear();
	}

	onChangeExample(e, data) {
		this.setState({ input: data.value });
		this.setState({ example: '' });
	}

	onChangeInput(e) {
		this.setState({ input: e.target.value });
	}

	render() {
		const examples = this.props.examples.map((example) => ({ text: example, value: example }));
		return (
			<Item className="resolver-input">
				<Input label='did-url' value={this.state.input} onChange={this.onChangeInput.bind(this)} />
				<Button primary onClick={this.onClickResolve.bind(this)}>Resolve</Button>
				<Button secondary onClick={this.onClickClear.bind(this)}>Clear</Button>
				<Dropdown placeholder='Examples' selection options={examples} value={this.state.example} onChange={this.onChangeExample.bind(this)} />
			</Item>
		);
	}
}

export default ResolverInput;
