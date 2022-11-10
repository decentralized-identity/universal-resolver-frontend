import React, { Component } from 'react';

import { Segment, Tab, Divider, Button, Modal, Grid } from 'semantic-ui-react'

import ResolverInput from './ResolverInput';
import Error from './Error';
import DidResult from './result/DidResult';
import DidDocument from './result/DidDocument';
import DidResolutionMetadata from './result/DidResolutionMetadata';
import DidDocumentMetadata from './result/DidDocumentMetadata';

export class Resolver extends Component {

	constructor (props) {
		super(props);
		this.state = { loading: false, didDocument: null, didResolutionMetadata: null, didDocumentMetadata: null, error: null, copyText: false };
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
					input={this.props.input}
					autoResolve={this.props.autoResolve}
					examples={this.props.examples}
					onClear={this.onClear.bind(this)}
					onLoading={this.onLoading.bind(this)}
					onResult={this.onResult.bind(this)}
					onError={this.onError.bind(this)} />
				<Divider />
				<div className='copy'>
					<Button 
					disabled={!this.didDocument}
					onClick={()=>{
						if(this.state.didDocument) {
							navigator.clipboard.writeText(`${window.location.href}#${this.state.didDocument.id}`);
							this.toggleCopyText()
						}
						
					}} style={{paddingBottom: '10px'}} primary >Copy link to result</Button>
					<p className={this.state.copyText ? `copy-text` : `copy-text-hidden`}>Url with DID copied to clipboard 🚀 🚀 🚀</p>
				</div>
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

	toggleCopyText() {
		this.setState({ ...this.state, copyText: !this.state.copyText});
		setTimeout(()=>{this.setState({...this.state, copyText: !this.state.copyText });},1000)
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
