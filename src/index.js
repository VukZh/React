import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Foot from './ft';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Foot />, document.getElementById('foot'));
registerServiceWorker();
