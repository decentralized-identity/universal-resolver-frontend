import React, { Component } from "react";

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
                    QR Code coming here
                </div>
            </div>
        );
    }
}