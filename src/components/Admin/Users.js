import React, { useEffect, useState } from 'react';
import {
	Switch,
	Route,
	Link,
	useRouteMatch,
	useHistory
} from 'react-router-dom';
import axios from '../../api/axios';
import User from './User';

const Users = props => {
	let { path, url } = useRouteMatch();
	const history = useHistory();
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		const getUsers = async () => {
			const response = await axios.get('/api/admin/users');
			setUsers(response.data);
		};
		getUsers();
	}, []);

	const startSearch = async () => {
		const response = await axios.post('/api/admin/user/userByScreenName', {
			screenName: search
		});
		if (response.data && response.data._id) {
			setSearch(response.data._id);
			history.push(`${url}/${response.data._id}`);
		} else {
			history.push(`${url}/${search}`);
		}
	};

	const handleChange = ev => {
		setSearch(ev.target.value);
	};

	const renderUsers = () => {
		return (
			<div className="contentlist">
				<p>The latest 20 users</p>
				<ol>
					{users.map(user => {
						return (
							<li key={user._id}>
								<Link to={`${url}/${user._id}`}>{user.screenName}</Link>
							</li>
						);
					})}
				</ol>
			</div>
		);
	};
	return (
		<div>
			<div className="searchbar">
				<input
					type="text"
					placeholder="type or copy id of the user, or the screenname"
					className="search"
					onChange={handleChange}
					value={search}
				/>
				<button onClick={startSearch}>Start search</button>
			</div>
			{users && users.length ? renderUsers() : <p>No users to display.</p>}
			<Switch>
				<Route path={`${path}/:id`}>
					<User />
				</Route>
			</Switch>
		</div>
	);
};

export default Users;
