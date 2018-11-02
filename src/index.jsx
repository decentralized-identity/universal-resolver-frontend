import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';

import 'semantic-ui-css/semantic.min.css';

import './styles/index.scss';

ReactDOM.render(
	<Router>
		<div>
			<Route path="/" component={App} />
		</div>
	</Router>,
	document.getElementById('app')
);
