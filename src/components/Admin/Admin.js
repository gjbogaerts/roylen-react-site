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
import '../../styles/admin.css';

const Admin = () => {
	let { path, url } = useRouteMatch();
	let history = useHistory();
	return (
		<div>
			<div className="adminheader">
				<span>Welcome to Roylen admin</span>
				<ul className="nav">
					<li></li>
					<li>
						<Link to={`${url}/users`}>Users</Link>
					</li>
					<li>
						<Link to={`${url}/ads`}>Ads</Link>
					</li>

					<li className="liAuth">
						<button
							onClick={() => {
								fakeAuth.signout(() => history.push('/'));
							}}
						>
							Sign out
						</button>
					</li>
				</ul>
			</div>
			<Switch>
				<Route path={path} exact>
					<h3>
						Now we're in admin main page. Please. Choose where you want to go.
						Now!! Pretty pleaseeeeee???!!
					</h3>
				</Route>
				<Route path={`${path}/users`}>
					<div className="admincontent">
						<Users />
					</div>
				</Route>
				<Route path={`${path}/ads`}>
					<div className="admincontent">
						<Ads />
					</div>
				</Route>
			</Switch>
		</div>
	);
};

export default Admin;
