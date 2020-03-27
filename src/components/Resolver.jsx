import React, { Component } from 'react';

import { Segment, Tab, Divider } from 'semantic-ui-react'

import ResolverInput from './ResolverInput';
import Error from './Error';
import DidResult from './result/DidResult';
import DidDocument from './result/DidDocument';
import ResolverMetadata from './result/ResolverMetadata';
import MethodMetadata from './result/MethodMetadata';

export class Resolver extends Component {

	constructor (props) {
		super(props);
		this.state = { loading: false, didDocument: null, resolverMetadata: null, methodMetadata: null, error: null };
		this.examples = [
			'did:sov:WRfXPg8dantKVubE3HX8pw',
			'did:sov:CYQLsccvwhMTowprMjGjQ6',
			'did:sov:builder:VbPQNHsvoLZdaNU7fTBeFx',
			'did:btcr:xz35-jznz-q9yu-ply',
			'did:btcr:xkrn-xz7q-qsye-28p',
			'did:btcr:x705-jznz-q3nl-srs',
			'did:btcr:xksa-czpq-qxr3-l8k',
			'did:btcr:xkyt-fzzq-q23l-k4n',
			'did:btcr:xyv2-xzpq-q63z-7p4',
			'did:btcr:xxcl-lzpq-qcwz-sj2',
			'did:v1:test:nym:z6MkgF4uJbLMoUin2uKaBf4Jb1F7SHzuALE8Ldq8FPPpHE9t',
			'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
			'did:nacl:Md8JiMIwsapml_FtQ2ngnGftNP5UmVCAUuhnLyAsPxI',
			'did:jolo:1fb352353ff51248c5104b407f9c04c3666627fcf5a167d693c9fc84b75964e2',
			'did:erc725:ropsten:2F2B37C890824242Cb9B0FE5614fA2221B79901E',
			'did:ipid:QmYA7p467t4BGgBL4NmyHtsXMoPrYH9b3kSG6dbgFYskJm',
			'did:elem:EiAS3mqC4OLMKOwcz3ItIL7XfWduPT7q3Fa4vHgiCfSG2A',
			'did:key:z6Mkfriq1MqLBoPWecGoDLjguo1sB9brj6wT3qZ5BxkKpuP6',
			'did:neoid:priv:b4eeeb80d20bfb38b23001d0659ce0c1d96be0aa',
			'did:github:gjgd',
			'did:stack:v0:16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg-0',
			'did:hcr:0f674e7e-4b49-4898-85f6-96176c1e30de',
			'did:ccp:ceNobbK6Me9F5zwyE3MKY88QZLw',
			'did:work:2UUHQCd4psvkPLZGnWY33L',
			'did:ont:AN5g6gz9EoQ3sCNu7514GEghZurrktCMiH',
			'did:kilt:5GFs8gCumJcZDDWof5ETFqDFEsNwCsVJUj2bX7y4xBLxN5qT',
			'did:web:did.or13.io',
			'ssi.labs.nic.at',
			'did:evan:testcore:0x126E901F6F408f5E260d95c62E7c73D9B60fd734'
		];
	}

	render() {
		var resultOrError;
		if (this.state.error) resultOrError = (
			<Error text={this.state.error} />
			);
		else if (this.state.didDocument || this.state.resolverMetadata) resultOrError = (
			<DidResult
				didDocument={this.state.didDocument}
				resolverMetadata={this.state.resolverMetadata}
				methodMetadata={this.state.methodMetadata} />
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
		this.setState({ loading: false, didDocument: null, resolverMetadata: null, methodMetadata: null, error: null });
	}

	onLoading() {
		this.setState({ loading: true, didDocument: null, resolverMetadata: null, methodMetadata: null, error: null });
	}

	onResult(didDocument, resolverMetadata, methodMetadata) {
		this.setState({ loading: false, didDocument: didDocument, resolverMetadata: resolverMetadata, methodMetadata: methodMetadata, error: null });
	}

	onError(error, didDocument, resolverMetadata, methodMetadata) {
		this.setState({ loading: false, didDocument: didDocument, resolverMetadata: resolverMetadata, methodMetadata: methodMetadata, error: error });
	}
}

export default Resolver;
