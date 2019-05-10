import React from 'react'

class EditNote extends React.Component {

	handleChange = (event) => {
		const editNote = {...this.props.note, [event.currentTarget.name]: event.currentTarget.value}
		this.props.editNote(this.props.index, editNote)
	}

	render() {
		return (
			<div className="note-form" key={this.props.note.key} index={this.props.note.key}>
					<h3 className="note-form__heading">
						Date: <span>{this.props.note.date}</span>
					</h3>
					<div className="note-form__row">
						<input className="note-form__paragraph" name="note" type="text" value={this.props.note.note} onChange={this.handleChange} />
						<button className="note-form__submit"
						onClick={() => this.props.removeNote(this.props.index)}>Remove</button>
					</div>
			</div>
		)
	}
}

export default EditNote
