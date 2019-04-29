import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import '../css/note.css'
import EditNote from './EditNote';


class Note extends React.Component {
	renderNote = key => {
		return (
			<CSSTransition
				className="note-form"
				key={key}
				index={key}
				timeout={{enter: 1000, exit: 500}}
			>
				<EditNote
					note={this.props.notes[key]}
					key={key}
					index={key}
					editNote={this.props.editNote}
					removeNote={this.props.removeNote}
				/>
			</CSSTransition>
		)
	}

	render() {
		const notesId = Object.keys(this.props.notes)
		return (
			<TransitionGroup component="div" className="note-wrapper">
				{notesId.map(this.renderNote)}
			</TransitionGroup>
		)
	}
}

export default Note
