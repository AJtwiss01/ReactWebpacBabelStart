// var React = require('react');
import React from 'react';
var ReactDOM = require('react-dom');
require('./index.css');


class App extends React.Component {
    render() {
        return (
        <div>hello {this.props.first} {this.props.last}</div>
        )
    }
}

ReactDOM.render(
    <App first="aj" last="twiss"/>, document.getElementById('app')
);