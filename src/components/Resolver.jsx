import React, { Component } from 'react';

import { Segment, Tab, Divider } from 'semantic-ui-react'

import ResolverInput from './ResolverInput';
import Error from './Error';
import DidResult from './result/DidResult';
import DidDocument from './result/DidDocument';
import DidResolutionMetadata from './result/DidResolutionMetadata';
import DidDocumentMetadata from './result/DidDocumentMetadata';

export class Resolver extends Component {

	constructor (props) {
		super(props);
		this.state = { loading: false, didDocument: null, didResolutionMetadata: null, didDocumentMetadata: null, error: null };
	}

	render() {
		var resultOrError;
		if (this.state.error) resultOrError = (
			<Error text={this.state.error} />
			);
		else if (this.state.didDocument || this.state.didResolutionMetadata) resultOrError = (
			<DidResult
				didDocument={this.state.didDocument}
				didResolutionMetadata={this.state.didResolutionMetadata}
				didDocumentMetadata={this.state.didDocumentMetadata} />
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
					{ menuItem: 'RESOLUTION METADATA', render: () =>
					<Tab.Pane loading={this.state.loading}>
						<DidResolutionMetadata
							didResolutionMetadata={this.state.didResolutionMetadata} />
					</Tab.Pane> },
					{ menuItem: 'DOCUMENT METADATA', render: () =>
					<Tab.Pane loading={this.state.loading}>
						<DidDocumentMetadata
							didDocumentMetadata={this.state.didDocumentMetadata} />
					</Tab.Pane> }
				]} />
			</Segment>
		);
	}

	onClear() {
		this.setState({ loading: false, didDocument: null, didResolutionMetadata: null, didDocumentMetadata: null, error: null });
	}

	onLoading() {
		this.setState({ loading: true, didDocument: null, didResolutionMetadata: null, didDocumentMetadata: null, error: null });
	}

	onResult(didDocument, didResolutionMetadata, didDocumentMetadata) {
		this.setState({ loading: false, didDocument: didDocument, didResolutionMetadata: didResolutionMetadata, didDocumentMetadata: didDocumentMetadata, error: null });
	}

	onError(error, didDocument, didResolutionMetadata, didDocumentMetadata) {
		this.setState({ loading: false, didDocument: didDocument, didResolutionMetadata: didResolutionMetadata, didDocumentMetadata: didDocumentMetadata, error: error });
	}
}

export default Resolver;
