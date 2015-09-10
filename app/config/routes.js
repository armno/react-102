// var React = require('react');
// var Main = require('../components/Main');
// var Home = require('../components/Home');
// var Profile = require('../components/Profile');
// var Router = require('react-router');
// var DefaultRoute = Router.DefaultRoute;
// var Route = Router.Route;
import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Router, DefaultRoute, Route } from 'react-router';

// module.exports = (
// 	<Route name="app" path="/" handler={Main}>
// 		<Route name="profile" path="profile/:username" handler={Profile} />
// 		<DefaultRoute handler={Home} />
// 	</Route>
// );

export default (
	<Route name="app" path="/" handler={Main}>
		<Route name="profile" path="profile/:username" handler={Profile} />
		<DefaultRoute handler={Home} />
	</Route>
);
