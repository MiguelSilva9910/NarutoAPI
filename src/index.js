import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouters />, document.getElementById('root'));
serviceWorker.unregister();
