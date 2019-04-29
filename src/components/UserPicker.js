import React from 'react'
import '../css/user-picker.css'
import icon from '../images/icon_1.png'

class UserPicker extends React.Component {
	myInput = React.createRef()

	handleSubmit = event => {
		event.preventDefault();
		const userID = this.myInput.current.value
		this.props.history.push(`/user/${userID}`)
		console.log(userID)
	}

	render () {
		return (
			<div className="form-wrapper">
				<form className="form-user" onSubmit={this.handleSubmit}>
					<img className="form-user__logo" src={icon} alt="logo"></img>
					<h2 className="form-user__heading">
						ToDoApp
					</h2>
					<div className="input-wrapper">
						<input className="form-user__input"
							type="text"
							required
							placeholder="Enter your login name"
							ref={this.myInput}
						/>
						<div className="form-user__question">
							<i className="fas fa-question" title="While choosing your login remeber all the characters; big and small letters does matter. You can always remove your identification name in a browser localstorage."></i>
						</div>
					</div>
					<button className="form-user__submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default UserPicker
