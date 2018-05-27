import React, { Component } from 'react';
import axios from 'axios';

import { Item, Column, Input, Button, Dropdown } from 'semantic-ui-react'

export class ResolverInput extends Component {

	constructor (props) {
		super(props)
		this.state = { input: 'did:sov:WRfXPg8dantKVubE3HX8pw', example: '' };
		this.onChangeInput = this.onChangeInput.bind(this);
	}

	onClickResolve() {
		this.props.onLoading();
		axios
			.get(env.backendUrl + '1.0/identifiers/' + encodeURIComponent(this.state.input))
			.then(response => {
				const didReference = response.data.didReference;
				const didDocument = response.data.didDocument;
				const resolverMetadata = response.data.resolverMetadata;
				const methodMetadata = response.data.methodMetadata;
				this.props.onResult(didReference, didDocument, resolverMetadata, methodMetadata);
			})
			.catch(error => {
				if (error.response !== undefined && error.response.data !== undefined) {
					this.props.onError(error.response.data);
			    } else if (error.request !== undefined) {
					this.props.onError(String(error) + ": " + JSON.stringify(error.request));
			    } else if (error.message !== undefined) {
					this.props.onError(error.message);
			    } else {
					this.props.onError(String(error));
			    }
			});
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
           		<Input label='did' value={this.state.input} onChange={this.onChangeInput} />
                <Button primary onClick={this.onClickResolve.bind(this)}>Resolve</Button>
                <Button secondary onClick={this.onClickClear.bind(this)}>Clear</Button>
    			<Dropdown placeholder='Examples' selection options={examples} value={this.state.example} onChange={this.onChangeExample.bind(this)} />
			</Item>
        );
    }
}

export default ResolverInput;
