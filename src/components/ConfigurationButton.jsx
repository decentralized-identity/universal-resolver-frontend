import React, { Component } from 'react';
import axios from 'axios';

import { Item, Button, Modal, Header } from 'semantic-ui-react'
import { Highlight } from 'react-fast-highlight';

export class ConfigurationButton extends Component {

	constructor (props) {
		super(props)
		this.state = { drivers: '' };
	}

	onClick() {
//		this.props.onLoading();
		let host = '';
		if (env.backendUrl !== 'docker') host = env.backendUrl
		else if (window._env_ !== undefined && window._env_.backendUrl !== undefined) host = window._env_.backendUrl
		axios
			.get(host + '1.0/properties/')
			.then(response => {
				this.setState({ drivers: response.data });
			})
			.catch(error => {
/*				if (error.response !== undefined && error.response.data !== undefined) {
					this.props.onError(error.response.data);
				} else if (error.request !== undefined) {
					this.props.onError(String(error) + ": " + JSON.stringify(error.request));
				} else if (error.message !== undefined) {
					this.props.onError(error.message);
				} else {
					this.props.onError(String(error));
				}*/
			});
	}

	render() {
		const button = (
			<h1>
				<Button secondary onClick={this.onClick.bind(this)} className="configuration-button">See configuration</Button>
			</h1>
		);
		const drivers = this.state.drivers === '' ? '' : JSON.stringify(this.state.drivers, null, 2);
		return (
			<Modal trigger={button}>
				<Modal.Header>Configuration</Modal.Header>
				<Modal.Content>
					<Modal.Description>
						<Highlight>
							{drivers}
						</Highlight>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		);
	}
}

export default ConfigurationButton;
