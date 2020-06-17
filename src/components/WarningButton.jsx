import React, { Component } from 'react';

import { Button, Icon } from 'semantic-ui-react'

import WarningPopup from './WarningPopup';

export class WarningButton extends Component {

	render() {
		const button = (
			<Button className="warning-button orange icon right floated"><Icon className="exclamation triangle" /></Button>
		);
		return (
			<WarningPopup trigger={button} />
		);
	}
}

export default WarningButton;
