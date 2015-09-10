// var React = require('react');
// var RouteHandler = require('react-router').RouteHandler;
// var SearchGitHub = require('./SearchGitHub');
import React from 'react';
import {RouteHandler} from 'react-router';
import SearchGitHub from './SearchGitHub';

// var Main = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="main-container">
// 				<nav className="navbar navbar-default" role="navigation">
// 					<div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15}}>
// 						<SearchGitHub />
// 					</div>
// 				</nav>
// 				<div className="container">
// 					<RouteHandler />
// 				</div>
// 			</div>
// 		)
// 	}
// });

class Main extends React.Component {
	render() {
		return (
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15}}>
						<SearchGitHub />
					</div>
				</nav>
				<div className="container">
					<RouteHandler {...this.props} />
				</div>
			</div>
		)
	}
}

// module.exports = Main;
export default Main;
