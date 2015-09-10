// var React = require('react');
// var Router = require('react-router');

import React from 'react';

// var SearchGitHub = React.createClass({
// 	mixins: [Router.Navigation],

// 	handleSubmit: function() {
// 		var username = this.refs.username.getDOMNode().value;
// 		this.refs.username.getDOMNode.value = '';
// 		this.transitionTo('profile', {
// 			username: username
// 		});
// 	},

// 	render: function() {
// 		return (
// 			<div className="col-sm-12">
// 				<form onSubmit={this.handleSubmit}>
// 					<div className="form-group col-sm-7">
// 						<input type="text" className="form-control" ref="username" />
// 					</div>
// 					<div className="form-group col-sm-5">
// 						<button type="submit" className="btn btn-block btn-primary">Search GitHub user</button>
// 					</div>
// 				</form>
// 			</div>
// 		);
// 	}
// });

class SearchGitHub extends React.Component {

	handleSubmit() {
		let router = this.context.router;
		let username = this.refs.username.getDOMNode().value;
		this.refs.username.getDOMNode.value = '';
		router.transitionTo('profile', {
			username
		});
	}

	render() {
		return (
			<div className="col-sm-12">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref="username" />
					</div>
					<div className="form-group col-sm-5">
						<button type="submit" className="btn btn-block btn-primary">Search GitHub user</button>
					</div>
				</form>
			</div>
		);
	}
}

SearchGitHub.contextTypes = {
	router: React.PropTypes.func.isRequired
};

// module.exports = SearchGitHub;
export default SearchGitHub;
