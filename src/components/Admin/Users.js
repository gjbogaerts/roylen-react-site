import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import User from './User';

const Users = props => {
	let { path, url } = useRouteMatch();
	return (
		<div>
			This is the Users component
			<ul>
				<li>
					<Link to={`${url}/12`}>User with id 12</Link>
				</li>
				<li>
					<Link to={`${url}/14`}>User with id 14</Link>
				</li>
				<li>
					<Link to={`${url}/15`}>User with id 15</Link>
				</li>
			</ul>
			<Switch>
				<Route path={`${path}/:id`} children={<User />} />
			</Switch>
		</div>
	);
};

export default Users;
