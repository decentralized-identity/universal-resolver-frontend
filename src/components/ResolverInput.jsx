import React, { Component } from 'react';
import axios from 'axios';

export class ResolverInput extends Component {

	constructor (props) {
		super(props)
		this.state = { input: 'did:sov:WRfXPg8dantKVubE3HX8pw' };
	}

	click() {
		axios.get('https://uniresolver.io/1.0/identifiers/${this.state.input}').then(res => {
			var result = {
	    		diddocument: {a: res},
	    		resultmetadata: {c: 'd'}
			};
			this.props.onResult(result);
		});
    }

	onChangeInput() {
		this.setState({ input:event.target.value });
	}

    render() {
        return (
            <div className="resolver-input">
            	<input className='topcoat-text-input--large' type='text' value={this.state.input} onChange={this.onChangeInput} />
                <button className='topcoat-button--large--cta' onClick={this.click.bind(this)}>Click Me</button>  
            </div>
        );
    }
}

export default ResolverInput;
