import React, { Component } from "react";
import QRCode from 'qrcode.react';

export class QrCodePopUp extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal_content">
                  <span className="close" onClick={this.handleClick}>
                    &times;
                  </span>
                    <QRCode value={this.props.did}/>
                </div>
            </div>
        );
    }
}