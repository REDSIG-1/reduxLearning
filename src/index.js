import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';

// Must wrap the entire app in the Providor and pass the configure store in there
ReactDOM.render(
    <Provider store={configureStore()} >
        <App />
    </Provider>,
    document.getElementById('root'),
);
