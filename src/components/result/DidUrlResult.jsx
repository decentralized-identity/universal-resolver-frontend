import React, { Component } from 'react';

import { Segment, Item, Card, Divider } from 'semantic-ui-react'

import DidUrl from './DidUrl';

export class DidUrlResult extends Component {

	render() {

		var didUrl;
		didUrl = this.props.didUrlDereferencingMetadata.didUrl;
		var didUrlString = (didUrl && didUrl.didUrlString) ? didUrl.didUrlString : null;

		var did;
		did = this.props.didUrlDereferencingMetadata.did;
		var didString = (did && did.didString) ? did.didString : null;

		return (
			<div className='did-url-result'>
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>
								Parser
							</Item.Header>
							<Item.Description>
								<DidUrl didUrl={didUrl} did={did} />
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</div>
		);
	}
}

export default DidUrlResult;
