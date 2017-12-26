import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// Load style
import './index.css';

ReactDOM.render((
    <BrowserRouter basename='/'>
        <Routes/>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();