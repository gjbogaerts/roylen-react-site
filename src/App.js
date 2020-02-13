import React from 'react';
import './App.css';
import Admin from './components/Admin/Admin';
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/admin">
					<Admin />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
