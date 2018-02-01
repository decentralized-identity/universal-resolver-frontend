import React, { Component } from 'react';

export class ResolverResult extends Component {

    render() {
        return (
            <div className="resolver-result">
                {this.props.result}
            </div>
        );
    }
}

export default ResolverResult;
