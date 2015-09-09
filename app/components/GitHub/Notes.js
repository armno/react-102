var React = require('react');

var Notes = React.createClass({
	render: function() {
		return (
			<div>
				Notes for: { this.props.username } <br />
				{ this.props.notes }
			</div>
		);
	}
});

module.exports = Notes;
