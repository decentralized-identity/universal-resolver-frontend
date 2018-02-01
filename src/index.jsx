import React from 'react';
import ReactDOM from 'react-dom';

import Heading from './components/Heading';
import Resolver from './components/Resolver';

import './styles/app.scss';
import 'topcoat/css/topcoat-desktop-light.min.css';

ReactDOM.render(
   <div>
      <Heading />
      <Resolver />
   </div>,
   document.getElementById('app')
);
