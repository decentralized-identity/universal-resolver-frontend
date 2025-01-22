import React, { Component } from 'react';

import { Segment, Item, Card, Divider, Image } from 'semantic-ui-react'

import DidUrl from './DidUrl';

export class DidUrlResult extends Component {

	render() {

		var didUrl = this.props.dereferencingMetadata.didUrl;
		var did = didUrl ? didUrl.did : null;

		const contentType = this.props.dereferencingMetadata.contentType;
		var contentRendering;
		if (contentType === 'image/svg+xml' || contentType === 'image/png' || contentType === 'image/jpeg' || contentType === 'image/gif' || contentType === 'image/tiff') {
			const imageSrc = 'data:' + contentType + ';base64,' + this.props.content;
			contentRendering = (
				<Image src={imageSrc} />
			);
		} else {
			const contentString = this.props.content;
			contentRendering = (
				<Highlight>
					{contentString}
				</Highlight>
			);
		}

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
				<Divider />
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>
								Resource
							</Item.Header>
							<Item.Description>
								{contentRendering}
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</div>
		);
	}
}

export default DidUrlResult;
