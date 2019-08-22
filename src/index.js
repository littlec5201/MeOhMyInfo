import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import './styling/styles.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
