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
			'did:sov:CYQLsccvwhMTowprMjGjQ6',
			'did:sov:builder:VbPQNHsvoLZdaNU7fTBeFx',
			'did:sov:WRfXPg8dantKVubE3HX8pw;version-time=123',
			'did:sov:WRfXPg8dantKVubE3HX8pw;version-time=127',
			'did:btcr:xz35-jznz-q6mr-7q6',
			'did:btcr:xkrn-xz7q-q0mx-4cl',
			'did:btcr:x705-jznz-qwvq-0uw',
			'did:btcr:xksa-czpq-qeuw-qcg',
			'did:btcr:xkyt-fzzq-q4wq-f2d',
			'did:btcr:xyv2-xzpq-q9wa-p7t',
			'did:btcr:xxcl-lzpq-q83a-0d5',
			'did:v1:test:nym:3AEJTDMSxDDQpyUftjuoeZ2Bazp4Bswj1ce7FJGybCUu',
			'did:v1:test:nym:UxYjr6F3hqwiF3yffplpcsV3pXSWSzVQ2396WT65e2E',
			'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
			'did:nacl:Md8JiMIwsapml_FtQ2ngnGftNP5UmVCAUuhnLyAsPxI',
			'did:jolo:1fb352353ff51248c5104b407f9c04c3666627fcf5a167d693c9fc84b75964e2',
			'did:elem:sscP2_bGvj2z6qnSV68ja-WR8WKCLTvNoRJjYSBvDZs',
			'did:hcr:0f674e7e-4b49-4898-85f6-96176c1e30de',
			'did:neoid:priv:b4eeeb80d20bfb38b23001d0659ce0c1d96be0aa',
			'did:ccp:ceNobbK6Me9F5zwyE3MKY88QZLw',
			'did:work:2UUHQCd4psvkPLZGnWY33L',
			'did:github:gjgd',
			'did:erc725:ropsten:2F2B37C890824242Cb9B0FE5614fA2221B79901E',
			'did:ipid:QmYA7p467t4BGgBL4NmyHtsXMoPrYH9b3kSG6dbgFYskJm',
			'did:stack:v0:16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg-0',
			'did:web:uport.me',
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
				resolverMetadata={this.state.resolverMetadata} />
			);

		return (
			<Segment className="resolver">
				<ResolverInput
					did={this.props.did}
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
