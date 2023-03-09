import React, { Component } from 'react';

import { Label } from 'semantic-ui-react'

export class Driver extends Component {

	constructor (props) {
		super(props);
	}

	render() {
		var validityText = null;
		if (this.props.validity) {
			validityText = this.props.validity['status'];
			for (var i in this.props.validity['identifiers']) {
				const identifier = this.props.validity['identifiers'][i];
				const identifierKey = Object.keys(identifier)[0];
				const identifierValue = Object.values(identifier)[0];
				if (! identifierValue['errors']) continue;
				validityText += ' - ' + identifierKey;
				for (var e in identifierValue['errors']) {
					const error = identifierValue['errors'][e];
					if (! error['error']) continue;
					validityText += " - " + error['error'];
				}
			}
		}
		const validityClass = this.props.validity ? 'driver validity-' + this.props.validity['status'].replace(' ', '-') : 'driver';
		return (
			<Label className={validityClass} data-tooltip={validityText}>
				{this.props.name}
			</Label>
		);
	}
}

export default Driver;
