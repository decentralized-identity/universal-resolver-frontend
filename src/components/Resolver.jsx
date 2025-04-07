import React, { Component } from 'react';

import { Segment, Tab, Divider, Button, Modal, Grid } from 'semantic-ui-react'

import ResolverInput from './ResolverInput';
import Error from './Error';
import DidResult from './result/DidResult';
import DidUrlResult from './result/DidUrlResult';
import DidDocument from './result/DidDocument';
import DidUrlContent from './result/DidUrlContent';
import DidMetadata from './result/DidMetadata';

export class Resolver extends Component {

	constructor (props) {
		super(props);
		this.state = { loading: false, didDocument: null, didResolutionMetadata: null, didDocumentMetadata: null, content: null, dereferencingMetadata: null, contentMetadata: null, error: null, copyText: false };
	}

	render() {
		var resultOrError;
		if (this.state.error) resultOrError = (
			<Error text={this.state.error} />
			);
		else if (this.state.didDocument || this.state.didResolutionMetadata || this.state.didDocumentMetadata) resultOrError = (
			<DidResult
				didDocument={this.state.didDocument}
				didResolutionMetadata={this.state.didResolutionMetadata}
				didDocumentMetadata={this.state.didDocumentMetadata} />
			);
		else if (this.state.content || this.state.dereferencingMetadata || this.state.contentMetadata) resultOrError = (
			<DidUrlResult
				content={this.state.content}
				dereferencingMetadata={this.state.dereferencingMetadata}
				contentMetadata={this.state.contentMetadata} />
		);

		var panes;
		if (this.state.didDocument || this.state.didResolutionMetadata) panes = [
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
					<DidMetadata
						didMetadata={this.state.didResolutionMetadata} />
				</Tab.Pane> },
			{ menuItem: 'DOCUMENT METADATA', render: () =>
				<Tab.Pane loading={this.state.loading}>
					<DidMetadata
						didMetadata={this.state.didDocumentMetadata} />
				</Tab.Pane> }
		]
		else if (this.state.content || this.state.dereferencingMetadata) panes = [
			{ menuItem: 'RESULT', render: () =>
				<Tab.Pane loading={this.state.loading}>
					{resultOrError}
				</Tab.Pane> },
			{ menuItem: 'CONTENT', render: () =>
				<Tab.Pane loading={this.state.loading}>
					<DidUrlContent
						content={this.state.content} />
				</Tab.Pane> },
			{ menuItem: 'DEREFERENCING METADATA', render: () =>
				<Tab.Pane loading={this.state.loading}>
					<DidMetadata
						didMetadata={this.state.dereferencingMetadata} />
				</Tab.Pane> },
			{ menuItem: 'CONTENT METADATA', render: () =>
				<Tab.Pane loading={this.state.loading}>
					<DidMetadata
						didMetadata={this.state.contentMetadata} />
				</Tab.Pane> }
		];

		return (
			<Segment className="resolver">
				<ResolverInput
					input={this.props.input}
					options={this.props.options}
					autoResolve={this.props.autoResolve}
					examples={this.props.examples}
					onClear={this.onClear.bind(this)}
					onLoading={this.onLoading.bind(this)}
					onResultResolve={this.onResultResolve.bind(this)}
					onResultDereference={this.onResultDereference.bind(this)}
					onError={this.onError.bind(this)} />
				<Divider />
				<div className='feature_button_area'>
					<div className='feature_button'>
						<Button 
							disabled={!this.state.didDocument}
							onClick={()=>{
								if(this.state.didDocument) {
									navigator.clipboard.writeText(`${window.location.href}#${this.state.didDocument.id}`);
									
								}
								this.toggleCopyText()
							}} style={{paddingBottom: '10px'}} primary >{"Copy"}
						</Button>
						<p className={this.state.copyText ? `feature_button-text` : `feature_button-hidden`}>Url with DID copied to clipboard 🚀 🚀 🚀</p>
					</div>
					<div className='feature_button'>
						<Button 
							disabled={!this.state.didDocument}
							onClick={()=>{
								if(this.state.didDocument) {
									window.open("https://didlint.ownyourdata.eu/validate?did=" + this.state.didDocument.id, '_blank');
								}
							}} style={{paddingBottom: '10px'}} primary >{"Validate"}
						</Button>
					</div>
				</div>
				<Divider />
				<Tab panes={
					panes
				} />
			</Segment>
		);
	}

	toggleCopyText() {
		this.setState({ ...this.state, copyText: !this.state.copyText});
		setTimeout(()=>{this.setState({...this.state, copyText: !this.state.copyText });},1000)
	}

	onClear() {
		this.setState({ loading: false, didDocument: null, didResolutionMetadata: null, didDocumentMetadata: null, content: null, dereferencingMetadata: null, contentMetadata: null, error: null });
	}

	onLoading() {
		this.setState({ loading: true, didDocument: null, didResolutionMetadata: null, didDocumentMetadata: null, content: null, dereferencingMetadata: null, contentMetadata: null, error: null });
	}

	onResultResolve(didDocument, didResolutionMetadata, didDocumentMetadata) {
		this.setState({ loading: false, didDocument: didDocument, didResolutionMetadata: didResolutionMetadata, didDocumentMetadata: didDocumentMetadata, content: null, dereferencingMetadata: null, contentMetadata: null, error: null });
	}

	onResultDereference(content, dereferencingMetadata, contentMetadata) {
		this.setState({ loading: false, didDocument: null, didResolutionMetadata: null, didDocumentMetadata: null, content: content, dereferencingMetadata: dereferencingMetadata, contentMetadata: contentMetadata, error: null });
	}

	onError(error, didDocument, didResolutionMetadata, didDocumentMetadata, content, dereferencingMetadata, contentMetadata) {
		this.setState({ loading: false, didDocument: didDocument, didResolutionMetadata: didResolutionMetadata, didDocumentMetadata: didDocumentMetadata, content: content, dereferencingMetadata: dereferencingMetadata, contentMetadata: contentMetadata, error: error });
	}
}

export default Resolver;
