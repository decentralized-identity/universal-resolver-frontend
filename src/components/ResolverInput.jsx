import React, { Component } from 'react';
import axios from 'axios';

import { Item, Input, Button, Dropdown } from 'semantic-ui-react';
import { getBackendUrl } from './utils';

export class ResolverInput extends Component {

	constructor(props) {
		super(props);
		this.state = { input: this.props.input, example: '' };
	}

	resolve() {
		const input = this.state.input.trim();
		const isResolve = ! (input.includes('/') || input.includes('?'));
		const url = getBackendUrl() + '1.0/identifiers/' + input;
		const acceptMediaType = isResolve ? 'application/ld+json;profile="https://w3id.org/did-resolution"' : 'application/ld+json;profile="https://w3id.org/did-url-dereferencing"';
		const config = {'headers': {'Accept': acceptMediaType}};
		console.log("input: " + input);
		console.log("isResolve: " + isResolve);
		console.log("url: " + url);
		console.log("config: " + JSON.stringify(config));
		axios
			.get(url, config)
			.then(response => {
				console.log("response: " + JSON.stringify(response));
				const didDocument = response.data.didDocument;
				const didResolutionMetadata = response.data.didResolutionMetadata;
				const didDocumentMetadata = response.data.didDocumentMetadata;
				const content = response.data.content;
				const dereferencingMetadata = response.data.dereferencingMetadata;
				const contentMetadata = response.data.contentMetadata;
				if (didDocument || didResolutionMetadata) this.props.onResultResolve(didDocument, didResolutionMetadata, didDocumentMetadata);
				if (content || dereferencingMetadata) this.props.onResultDereference(content, dereferencingMetadata, contentMetadata);
			})
			.catch(error => {
				console.log("error: " + String(error));
				if (error.response && error.response.data) {
					var errorString;
					if (error.response.data.didResolutionMetadata && error.response.data.didResolutionMetadata['error']) {
						errorString = "[" + error.response.data.didResolutionMetadata['error'] + "] " + error.response.data.didResolutionMetadata['errorMessage'];
					} else {
						errorString = String(error);
					}
					if (typeof error.response.data === 'object') {
						const didDocument = error.response.data.didDocument;
						const didResolutionMetadata = error.response.data.didResolutionMetadata ? error.response.data.didResolutionMetadata : error.response.data;
						const didDocumentMetadata = error.response.data.didDocumentMetadata;
						this.props.onError(errorString, didDocument, didResolutionMetadata, didDocumentMetadata);
					} else {
						this.props.onError(errorString + ': ' + error.response.data);
					}
				} else if (error.request) {
					this.props.onError(String(error) + ": " + JSON.stringify(error.request));
				} else if (error.name && error.message) {
					this.props.onError(error.name + ': ' + error.message);
				} else {
					this.props.onError(String(error));
				}
			});
	}

	componentDidMount() {
		if (this.props.autoResolve) {
			this.props.onLoading();
			this.resolve();
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.input !== this.props.input) {
			this.setState({ input: this.props.input });
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
