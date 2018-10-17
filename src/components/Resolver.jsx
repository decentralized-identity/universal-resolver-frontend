import React, { Component } from 'react';

import { Segment, Tab, Divider } from 'semantic-ui-react'

import ResolverInput from './ResolverInput';
import Error from './Error';
import DidRedirect from './result/DidRedirect';
import DidResult from './result/DidResult';
import DidDocument from './result/DidDocument';
import ResolverMetadata from './result/ResolverMetadata';
import MethodMetadata from './result/MethodMetadata';

export class Resolver extends Component {

	constructor (props) {
		super(props);
		this.state = { loading: false, redirect: '', didDocument: '', resolverMetadata: '', methodMetadata: '', error: '' };
		this.examples = [
			'did:sov:WRfXPg8dantKVubE3HX8pw',
			'did:sov:stn:WRfXPg8dantKVubE3HX8pw',
			'did:btcr:xz35-jzv2-qqs2-9wjt',
			'did:btcr:x705-jzv2-qqaz-7vuz',
			'did:btcr:xkrn-xzcr-qqlv-j6sl',
			'did:v1:test:nym:3AEJTDMSxDDQpyUftjuoeZ2Bazp4Bswj1ce7FJGybCUu',
			'did:v1:test:nym:UxYjr6F3hqwiF3yffplpcsV3pXSWSzVQ2396WT65e2E',
			'did:uport:2omWsSGspY7zhxaG6uHyoGtcYxoGeeohQXz',
			'did:stack:v0:16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg-0',
			'did:erc725:ropsten:2F2B37C890824242Cb9B0FE5614fA2221B79901E',
			'did:ipid:QmYA7p467t4BGgBL4NmyHtsXMoPrYH9b3kSG6dbgFYskJm',
			'did:dom:Jjbfgyu7My4RrbRNrXTPBz4PnhnMEE',
			'did:muport:Qmbrpc3gKtapsL5k6nZuzYvoMQZwMup5qWvss1q4XuaRJd',
			'did:eth:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736',
			'did:ethr:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736',
			'ssi.labs.nic.at'
		];
	}

	render() {
		var resultOrError;
		if (this.state.error) resultOrError = (
			<Error text={this.state.error} />
			);
		else if (this.state.redirect) resultOrError = (
			<DidRedirect
				redirect={this.state.redirect} />
			);
		else if (this.state.didDocument || this.state.resolverMetadata) resultOrError = (
            <DidResult
            	didDocument={this.state.didDocument}
				resolverMetadata={this.state.resolverMetadata}
            	error={this.state.error} />
            );

        return (
            <Segment className="resolver">
                <ResolverInput 
                	examples={this.examples}
                	onClear={this.onClear.bind(this)}
                	onLoading={this.onLoading.bind(this)}
                	onResult={this.onResult.bind(this)}
                	onError={this.onError.bind(this)} />
                <Divider />
                <Tab panes={[
					{ menuItem: 'RESULT', render: () =>
					<Tab.Pane loading={this.state.loading}>
						{resultOrError}
					</Tab.Pane> },
					{ menuItem: 'DID DOCUMENT', render: () =>
					<Tab.Pane loading={this.state.loading}>
		                <DidDocument
		                	didDocument={this.state.didDocument} />
					</Tab.Pane> },
					{ menuItem: 'RESOLVER METADATA', render: () =>
					<Tab.Pane loading={this.state.loading}>
		                <ResolverMetadata 
		                	resolverMetadata={this.state.resolverMetadata} />
					</Tab.Pane> },
					{ menuItem: 'METHOD METADATA', render: () =>
					<Tab.Pane loading={this.state.loading}>
				<MethodMetadata
					methodMetadata={this.state.methodMetadata} />
					</Tab.Pane> }
				]} />
            </Segment>
        );
    }

    onClear() {
	this.setState({ loading: false, redirect: '', didDocument: '', resolverMetadata: '', methodMetadata: '', error: '' });
	}

	onLoading() {
	this.setState({ loading: true, redirect: '', didDocument: '', resolverMetadata: '', methodMetadata: '', error: '' });
	}

    onResult(redirect, didDocument, resolverMetadata, methodMetadata) {
	this.setState({ loading: false, redirect: redirect, didDocument: didDocument, resolverMetadata: resolverMetadata, methodMetadata: methodMetadata, error: '' });
	}

    onError(error) {
	this.setState({ loading: false, redirect: '', didDocument: '', resolverMetadata: '', methodMetadata: '', error: error });
	}
}

export default Resolver;
