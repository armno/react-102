// var axios = require('axios');
import axios from 'axios';

function getRepos(username) {
	return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
	return axios.get(`https://api.github.com/users/${username}`);
}

var helpers = {
	getGitHubInfo(username) {
		return axios.all([getRepos(username), getUserInfo(username)])
			.then((data) => {
				return {
					repos: data[0].data,
					bio: data[1].data
				}
			})
	}
}

// module.exports = helpers;
export default helpers;
