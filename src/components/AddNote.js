import React from 'react'
import '../css/add-note.css'

class AddNote extends React.Component {
	noteRef = React.createRef()

	createNote = event => {
		event.preventDefault()
		const note = {
			note: this.noteRef.current.value,
			date: this.currentDate()
		}
		this.props.addNote(note)
		event.currentTarget.reset()
	}
	
	currentDate() {
		const tempDate = new Date()
		const date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate()
		const date2 = date.toLocaleString()
		return date2
	}

	render() {
		return (
			<form className="add-note-form" onSubmit={this.createNote}>
				<input
					type="text"
					name="note"
					placeholder="Place for your personal note" className="add-note-form__desc"
					required
					ref={this.noteRef}
					autoComplete="off"
				/>
				<button className="add-note-form__submit" type="submit" >+ Add note</button>
			</form>
		)
	}
}

export default AddNote
