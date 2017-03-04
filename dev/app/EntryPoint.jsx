/**
 * Created by augusto on 4/3/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './app.jsx';

const app = (
    <App />
);

ReactDOM.render(app, document.getElementById('app'));
