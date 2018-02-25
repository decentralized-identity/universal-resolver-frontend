import React, { Component } from 'react';

import { Segment, Tab, Divider } from 'semantic-ui-react'

import ResolverInput from './ResolverInput';
import Error from './Error';
import DidResult from './result/DidResult';
import DidDocument from './result/DidDocument';
import ResolverMetadata from './result/ResolverMetadata';
import DriverMetadata from './result/DriverMetadata';

export class Resolver extends Component {

	constructor (props) {
		super(props);
		this.state = { loading: false, didReference: '', didDocument: '', resolverMetadata: '', driverMetadata: '', error: '' };
		this.examples = [
			'did:sov:WRfXPg8dantKVubE3HX8pw',
			'did:btcr:xkrn-xzcr-qqlv-j6sl',
			'did:v1:test:nym:4fz1vBMKAWo145vL5xsGXDqvQpy3d8FRpsHv4AUF6YJD',
			'did:v1:test:nym:9aGBrquOpFidejdtC8nRqGguccCEyHlMFhetWddGQZg',
			'did:uport:2ok9oMAM54TeFMfLb3ZX4i9Qu6x5pcPA7nV',
			'did:stack:v0:16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg-0',
			'did:erc725:ropsten:2F2B37C890824242Cb9B0FE5614fA2221B79901E',
			'did:ipid:QmbFuwbp7yFDTMX6t8HGcEiy3iHhfvng89A19naCYGKEBj'
		];
	}

    render() {
    	var resultOrError;
    	if (this.state.error) resultOrError = (
    		<Error text={this.state.error} />
    		);
    	if (this.state.didReference && this.state.didDocument) resultOrError = (
            <DidResult
            	didReference={this.state.didReference}
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
					{ menuItem: 'DID RESULT', render: () =>
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
					{ menuItem: 'DRIVER METADATA', render: () =>
					<Tab.Pane loading={this.state.loading}>
		                <DriverMetadata 
		                	driverMetadata={this.state.driverMetadata} />
					</Tab.Pane> }
				]} />
            </Segment>
        );
    }

    onClear() {
    	this.setState({ loading: false, didReference: '', didDocument: '', resolverMetadata: '', driverMetadata: '', error: '' });
	}

	onLoading() {
    	this.setState({ loading: true, didReference: '', didDocument: '', resolverMetadata: '', driverMetadata: '', error: '' });
	}

    onResult(didReference, didDocument, resolverMetadata, driverMetadata) {
    	this.setState({ loading: false, didReference: didReference, didDocument: didDocument, resolverMetadata: resolverMetadata, driverMetadata: driverMetadata, error: '' });
	}

    onError(error) {
    	this.setState({ loading: false, didReference: '', didDocument: '', resolverMetadata: '', driverMetadata: '', error: error });
	}
}

export default Resolver;
