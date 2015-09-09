var React = require('react');

var Repos = React.createClass({
	render: function() {
		return (
			<div>
				Repos of: { this.props.username} <br />
			</div>
		);
	}
});

module.exports = Repos;
