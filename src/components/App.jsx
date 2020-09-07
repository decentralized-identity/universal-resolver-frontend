import React, { Component } from 'react';

import Drivers from './Drivers';
import Heading from './Heading';
import Resolver  from './Resolver';
import Footer from './Footer';

export class App extends Component {

	constructor (props) {
		super(props);
		this.drivers = [
			{name: 'did:btcr'},
			{name: 'did:sov'},
			{name: 'did:v1'},
			{name: 'did:key'},
			{name: 'did:ethr'},
			{name: 'did:nacl'},
			{name: 'did:web'},
			{name: 'did:jolo'},
			{name: 'did:erc725'},
			{name: 'did:ipid'},
			{name: 'did:elem'},
			{name: 'did:neoid'},
			{name: 'did:github'},
			{name: 'did:stack'},
			{name: 'did:hcr'},
			{name: 'did:ccp'},
			{name: 'did:work'},
			{name: 'did:ont'},
			{name: 'did:kilt'},
			{name: 'did:evan'},
			{name: 'did:echo'},
			{name: 'did:factom'},
			{name: 'did:dock'},
			{name: 'did:abt'},
			{name: 'did:sirius'},
			{name: 'did:mpg'},
			{name: 'did:io'},
			{name: 'did:trust'},
		];
		this.examples = [
			'did:sov:WRfXPg8dantKVubE3HX8pw',
			'did:sov:CYQLsccvwhMTowprMjGjQ6',
			'did:sov:builder:VbPQNHsvoLZdaNU7fTBeFx',
			'did:btcr:xz35-jznz-q9yu-ply',
			'did:btcr:xkrn-xz7q-qsye-28p',
			'did:btcr:x705-jznz-q3nl-srs',
			'did:btcr:xksa-czpq-qxr3-l8k',
			'did:btcr:xkyt-fzzq-q23l-k4n',
			'did:btcr:xyv2-xzpq-q63z-7p4',
			'did:btcr:xxcl-lzpq-qcwz-sj2',
			'did:v1:test:nym:z6MkgF4uJbLMoUin2uKaBf4Jb1F7SHzuALE8Ldq8FPPpHE9t',
			'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
			'did:nacl:Md8JiMIwsapml_FtQ2ngnGftNP5UmVCAUuhnLyAsPxI',
			'did:jolo:1fb352353ff51248c5104b407f9c04c3666627fcf5a167d693c9fc84b75964e2',
			'did:erc725:ropsten:2F2B37C890824242Cb9B0FE5614fA2221B79901E',
			'did:ipid:QmYA7p467t4BGgBL4NmyHtsXMoPrYH9b3kSG6dbgFYskJm',
			'did:elem:EiAS3mqC4OLMKOwcz3ItIL7XfWduPT7q3Fa4vHgiCfSG2A',
			'did:key:z6Mkfriq1MqLBoPWecGoDLjguo1sB9brj6wT3qZ5BxkKpuP6',
			'did:neoid:priv:b4eeeb80d20bfb38b23001d0659ce0c1d96be0aa',
			'did:github:gjgd',
			'did:stack:v0:16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg-0',
			'did:hcr:0f674e7e-4b49-4898-85f6-96176c1e30de',
			'did:ccp:ceNobbK6Me9F5zwyE3MKY88QZLw',
			'did:work:2UUHQCd4psvkPLZGnWY33L',
			'did:ont:AN5g6gz9EoQ3sCNu7514GEghZurrktCMiH',
			'did:kilt:5CqJa4Ct7oMeMESzehTiN9fwYdGLd7tqeirRMpGDh2XxYYyx',
			'did:web:data-vault.eu:u:zi4xgcHtYo7fh_KAURaO1beG2v6WN9ImVnQ30CBDEJjLrw',
			'ssi.labs.nic.at',
			'did:evan:testcore:0x126E901F6F408f5E260d95c62E7c73D9B60fd734',
			'did:echo:1.1.25.0',
			'did:factom:testnet:6aa7d4afe4932885b5b6e93accb5f4f6c14bd1827733e05e3324ae392c0b2764',
			'did:dock:5FXqofpV7dsuki925U1dSzDvBuQbaci5yWTQGVWRQ7bdQP5p',
			'did:abt:z116ygT18P67xBp3scBtZLU6xVoDy268bgnY',
			'did:sirius:2VhYrbauc2cCx9ZpCp5wrDtK7HKf7jrsvgoKBD4KgK',
			'did:mpg:7PGGnRdvKKFftSXU3Jw75Vk5npfg',
			'did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A',
			'did:trust:cert.EiBJ6qjVXgJ-A8xnaUiu4rtLDgeobQYgRWjMV49aCak4HQ',

		];
		this.examples.sort();
		this.state = { drivers: this.drivers };
	}

	render() {
		var did;
		var autoResolve;
		if (this.props.location.hash) {
			if (this.props.location.hash.indexOf("#did=") == 0) {
				did = this.props.location.hash.substr("#did=".length);
			} else {
				did = this.props.location.hash.substr(1);
			}
			autoResolve = true;
		} else {
			did = 'did:elem:EiAS3mqC4OLMKOwcz3ItIL7XfWduPT7q3Fa4vHgiCfSG2A';
			autoResolve = false;
		}
		return (
			<div className="app">
				<Heading />
				<Drivers drivers={this.state.drivers} />
				<Resolver did={did} autoResolve={autoResolve} examples={this.examples} />
				<Footer />
			</div>
		);
	}
}

export default App;
