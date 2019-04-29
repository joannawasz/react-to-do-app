import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import UserPicker from './UserPicker'
import NotFound from './NotFound'

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={UserPicker} />
			<Route exact path="/user/:userId" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default Router
