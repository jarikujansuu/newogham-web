import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'
import { PlayerHallOfFameContainer } from './scenes/hall-of-fame/PlayerHallOfFameContainer'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/hall-of-fame/players" component={ PlayerHallOfFameContainer }/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
