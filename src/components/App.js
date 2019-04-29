import React, { Component } from 'react';
import Heading from './Heading'
import AddNote from './AddNote'
import Note from './Note'
import samples from '../samples'
import '../css/App.css';

class App extends Component {
  state = {
    notes: {},
  }

  addNote = (note) => {
    const notes = {...this.state.notes}
    notes[`note${Date.now()}`] = note
    this.setState({notes})
  }

  removeNote = (note) => {
    const notes = {...this.state.notes}
    delete notes[note]
    this.setState({ notes })
  }

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.userId);
    if (localStorageRef) {
      this.setState({ notes: JSON.parse(localStorageRef)});
    } else {
      this.setState({notes: samples})
    }
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.userId, JSON.stringify(this.state.notes))
  }
  
  editNote = (note, editNote) => {
		const notes = {...this.state.notes}
		notes[note] = editNote
		this.setState({notes})
	}

  render() {
    return (
      <div className="app">
        <div className="app-notebook-wrapper">
          <Heading
            userName={this.props.match.params.userId}
          />
          <AddNote
            addNote = {this.addNote}
          />
          <div className="app-note-wrapper">
            <Note
              notes={this.state.notes}
              removeNote={this.removeNote}
              editNote={this.editNote}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
