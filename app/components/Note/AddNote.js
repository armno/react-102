var React = require('react');

var AddNote = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		addNote: React.PropTypes.func.isRequired
	},
	handleSubmit: function() {
		var newNote = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = '';
		this.props.addNote(newNote);
	},
	render: function() {
		return (
			<form className="form-inline">
				<div className="form-group">
					<div className="input-group">
						<input type="text" className="form-control" ref="note" placeholder="Add new note" />
					</div>
				</div>
				<button className="btn btn-default" type="button" onClick={ this.handleSubmit }>
					Submit
				</button>
			</form>
		)
	}
});

module.exports = AddNote;
