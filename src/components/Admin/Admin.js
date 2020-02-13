import React from 'react';
import {
	Switch,
	Route,
	Link,
	useRouteMatch,
	useHistory
} from 'react-router-dom';
import Users from './Users';
import Ads from './Ads';
import fakeAuth from '../../auth/fakeAuth';

const Admin = () => {
	let { path, url } = useRouteMatch();
	let history = useHistory();
	return (
		<div>
			<ul>
				<li>
					<Link to={`${url}/users`}>Users</Link>
				</li>
				<li>
					<Link to={`${url}/ads`}>Ads</Link>
				</li>

				<li>
					<button
						onClick={() => {
							fakeAuth.signout(() => history.push('/'));
						}}
					>
						Sign out
					</button>
				</li>
			</ul>
			<Switch>
				<Route path={path} exact>
					<h3>Now we're in admin main page. Choose where you want to go</h3>
				</Route>
				<Route path={`${path}/users`}>
					<Users />
				</Route>
				<Route path={`${path}/ads`}>
					<Ads />
				</Route>
			</Switch>
		</div>
	);
};

export default Admin;
