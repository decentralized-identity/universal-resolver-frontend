import React, { Component } from 'react';
import axios from 'axios';

import { Item, Input, Button, TextArea, Dropdown } from 'semantic-ui-react';
import { getBackendUrl } from './utils';

export class ResolverInput extends Component {

	constructor(props) {
		super(props);
		this.state = { input: this.props.input, options: '{}', example: '' };
	}

	resolve() {
		const input = this.state.input.trim();
		const options = this.state.options.trim();
		const isResolve = ! (input.includes('/') || input.includes('?'));
		const acceptMediaType = isResolve ? 'application/ld+json;profile="https://w3id.org/did-resolution"' : 'application/ld+json;profile="https://w3id.org/did-url-dereferencing"';
		const config = {'headers': {'Accept': acceptMediaType}};
		var url;
		if (Object.keys(JSON.parse(options)).length === 0) {
			url = getBackendUrl() + '1.0/identifiers/' + input;
		} else {
			url = getBackendUrl() + '1.0/identifiers/' + encodeURIComponent(input) + '?' + encodeURIComponent(JSON.stringify(JSON.parse(options)));
		}
		console.log("input: " + input);
		console.log("options: " + options);
		console.log("isResolve: " + isResolve);
		console.log("acceptMediaType: " + acceptMediaType);
		console.log("config: " + JSON.stringify(config));
		console.log("url: " + url);
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
						const content = error.response.data.content;
						const dereferencingMetadata = error.response.data.dereferencingMetadata ? error.response.data.dereferencingMetadata : error.response.data;
						const contentMetadata = error.response.data.contentMetadata;
						this.props.onError(errorString, didDocument, didResolutionMetadata, didDocumentMetadata, content, dereferencingMetadata, contentMetadata);
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

	onChangeOptions(e) {
		this.setState({ options: e.target.value });
	}

	render() {
		const examples = this.props.examples.map((example) => ({ text: example, value: example }));
		return (
			<Item className="resolver-input">
				<Input label='did-url' className="did-url-input" value={this.state.input} onChange={this.onChangeInput.bind(this)} />
				<Button primary onClick={this.onClickResolve.bind(this)}>Resolve</Button>
				<Button secondary onClick={this.onClickClear.bind(this)}>Clear</Button>
				<Dropdown placeholder='Examples' selection options={examples} value={this.state.example} onChange={this.onChangeExample.bind(this)} />
				<Input label='options' className="options-input" value={this.state.options} onChange={this.onChangeOptions.bind(this)} />
			</Item>
		);
	}
}

export default ResolverInput;
