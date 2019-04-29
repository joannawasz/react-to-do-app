import React from 'react'

class Heading extends React.Component {
	render () {
		return <h2 className="app-notebook-heading">
			Hi {this.props.userName}! Welcome to your personal ToDoApp notebook
		</h2>
	}
}

export default Heading
