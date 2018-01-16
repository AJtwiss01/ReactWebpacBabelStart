import React from 'react';
import ReactDOM from 'react-dom';
import App from  './components/app';
require('./index.css');

ReactDOM.render(
    <App first="aj" last="twiss"/>, document.getElementById('app')
);
