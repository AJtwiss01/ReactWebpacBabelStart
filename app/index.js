// var React = require('react');
import React from 'react';
var ReactDOM = require('react-dom');
require('./index.css');


class App extends React.Component {
    render() {
        return (
        <div>hello</div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
);