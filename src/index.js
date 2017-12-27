import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// Load style
import './assets/css/yummy/yummy.css';
import './assets/css/style.css';

ReactDOM.render((
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();