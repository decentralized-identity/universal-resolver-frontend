import React, { Component } from 'react';

import { Highlight } from 'react-fast-highlight';

export class DidUrlContent extends Component {

	render() {
		const contentString = this.props.content ? JSON.stringify(this.props.content, null, 2) : null;
		const content = contentString ? (
			<Highlight className='js'>
				{contentString}
			</Highlight>
		) : null;
		return content;
	}
}

export default DidUrlContent;
