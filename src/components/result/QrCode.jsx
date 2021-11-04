import React, { Component } from "react";
import QRCode from 'qrcode.react';

export class QrCode extends Component {

	render() {
		return (
			<div className="modal">
				<div className="modal_content">
					<QRCode value={this.props.qrcodedata}/>
				</div>
			</div>
		);
	}
}

export default QrCode;
