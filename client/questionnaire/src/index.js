import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './Users';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Users />, document.getElementById('root'));
registerServiceWorker();
