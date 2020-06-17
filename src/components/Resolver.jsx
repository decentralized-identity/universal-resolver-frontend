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
					autoResolve={this.props.autoResolve}
					examples={this.props.examples}
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
