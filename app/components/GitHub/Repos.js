var React = require('react');

var Repos = React.createClass({

	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	},


	render: function() {
		return (
			<div>
				Repos of: { this.props.username} <br />
			</div>
		);
	}
});

module.exports = Repos;
