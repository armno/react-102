// var React = require('react');
// var Router = require('react-router');
// var UserProfile = require('../components/GitHub/UserProfile');
// var Repos = require('../components/GitHub/Repos');
// var Notes = require('../components/GitHub/Notes');
// var ReactFireMixin = require('reactfire');
// var Firebase = require('firebase');
// var helpers = require('./utils/helpers.js');

import React from 'react';
import UserProfile from '../components/GitHub/UserProfile';
import Repos from '../components/GitHub/Repos';
import Notes from '../components/GitHub/Notes';
import helpers from './utils/helpers';
import Rebase from 're-base';

var base = Rebase.createClass('https://armno-github-notes.firebaseio.com/');

// var Profile = React.createClass({

// 	mixins: [Router.State, ReactFireMixin],

// 	getInitialState: function() {
// 		return {
// 			notes: [],
// 			bio: {},
// 			repos: []
// 		};
// 	},

// 	init: function() {
// 		var childRef = this.ref.child(this.getParams().username);
// 		this.bindAsArray(childRef, 'notes');

// 		helpers.getGitHubInfo(this.getParams().username)
// 			.then(function(dataObject) {
// 				this.setState({
// 					bio: dataObject.bio,
// 					repos: dataObject.repos
// 				});
// 			}.bind(this));
// 	},

// 	componentDidMount: function() {
// 		this.ref = new Firebase('https://armno-github-notes.firebaseio.com');
// 		this.init();
// 	},

// 	componentWillUnmount: function() {
// 		this.unbind('notes');
// 	},

// 	componentWillReceiveProps: function() {
// 		this.unbind('notes');
// 		this.init();
// 	},

// 	render: function() {

// 		var username = this.getParams().username;

// 		return (
// 			<div className="row">
// 				<div className="col-md-4">
// 					<UserProfile username={username} bio={this.state.bio} />
// 				</div>
// 				<div className="col-md-4">
// 					<Repos username={username} repos={this.state.repos} />
// 				</div>
// 				<div className="col-md-4">
// 					<Notes username={username} notes={this.state.notes}
// 						addNote={this.handleAddNote}/>
// 				</div>
// 			</div>
// 		)
// 	},

// 	handleAddNote: function(newNote) {
// 		this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
// 	}
// });

class Profile extends React.Component {
	// getInitialState () {
	// 	return {
	// 		notes: [],
	// 		bio: {},
	// 		repos: []
	// 	};
	// }

	constructor(props) {

		super(props);

		this.state = {
			notes: [],
			bio: {},
			repos: []
		};
	}

	init () {
		// let childRef = this.ref.child(this.getParams().username);
		// this.bindAsArray(childRef, 'notes');
		this.ref = base.bindToState(this.router.getCurrentParams().username, {
			context: this,
			asArray: true,
			state: 'notes'
		});

		helpers.getGitHubInfo(this.router.getCurrentParams().username)
			.then((dataObject) => {
				this.setState({
					bio: dataObject.bio,
					repos: dataObject.repos
				});
			});
	}

	componentDidMount () {
		// this.ref = new Firebase('https://armno-github-notes.firebaseio.com');
		this.init();
	}

	componentWillMount() {
		this.router = this.context.router;
	}

	componentWillUnmount () {
		// this.unbind('notes');
		base.removeBinding(this.ref);
	}

	componentWillReceiveProps() {
		// this.unbind('notes');
		base.removeBinding(this.ref);
		this.init();
	}

	render() {

		let username = this.router.getCurrentParams().username;

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
						addNote={this.handleAddNote.bind(this)}/>
				</div>
			</div>
		)
	}

	handleAddNote(newNote) {
		// this.ref.child(this.router.getCurrentParams().username).set(this.state.notes.concat([newNote]));
		base.post(this.router.getCurrentParams().username, {
			data: this.state.notes.concat([newNote])
		});
	}
}

Profile.contextTypes = {
	router: React.PropTypes.func.isRequired
};

// module.exports = Profile;
export default Profile;
