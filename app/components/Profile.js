var React = require('react');
var Router = require('react-router');
var UserProfile = require('../components/GitHub/UserProfile');
var Repos = require('../components/GitHub/Repos');
var Notes = require('../components/GitHub/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('./utils/helpers.js');

var Profile = React.createClass({

	mixins: [Router.State, ReactFireMixin],

	getInitialState: function() {
		return {
			notes: [],
			bio: {},
			repos: []
		};
	},

	componentDidMount: function() {
		this.ref = new Firebase('https://armno-github-notes.firebaseio.com');
		var childRef = this.ref.child(this.getParams().username);
		this.bindAsArray(childRef, 'notes');

		helpers.getGitHubInfo(this.getParams().username)
			.then(function(dataObject) {
				this.setState({
					bio: dataObject.bio,
					repos: dataObject.repos
				});
			}.bind(this));
	},

	componentWillUnmount: function() {
		this.unbind('notes');
	},

	render: function() {

		var username = this.getParams().username;

		return (
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos username={username} repos={this.state.repos} />
				</div>
				<div className="col-md-4">
					<Notes username={username} notes={this.state.notes}
						addNote={this.handleAddNote}/>
				</div>
			</div>
		)
	},

	handleAddNote: function(newNote) {
		this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
	}
});

module.exports = Profile;
