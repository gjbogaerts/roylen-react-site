import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/admin.css';
import { baseUrl } from '../../api/axios';
import axios from '../../api/axios';

const User = props => {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			const response = await axios.get(`/api/admin/user/${id}`);
			setUser(response.data);
		};
		try {
			getUser();
		} catch (err) {
			console.log(err);
		}
	}, [id]);

	const ban = async () => {
		const response = await axios.post('/api/admin/user/ban', { id: user._id });
		if (response.status === 422) {
			alert(response.data);
		} else {
			if (response.data.nModified === 1) {
				alert('Change implemented');
			} else {
				alert('Check database; something likely went wrong.');
			}
		}
	};

	const unban = async () => {
		const response = await axios.post('/api/admin/user/unban', {
			id: user._id
		});
		if (response.status === 422) {
			alert(response.data);
		} else {
			if (response.data.nModified === 1) {
				alert('Change implemented');
			} else {
				alert('Check database; something likely went wrong.');
			}
		}
	};

	const renderUser = () => {
		// console.log(user);
		if (!user) {
			return 'No user found with this id. You should check directly in the database';
		} else {
			return (
				<div>
					<p>
						{user.isBanned ? (
							<button onClick={unban} className="alert">
								Unban this user
							</button>
						) : (
							<button onClick={ban} className="alert">
								Ban this user
							</button>
						)}
					</p>
					<h2>
						{user.screenName} ({user.nix} nix)
					</h2>
					<h3>
						<a href={`mailto:${user.email}`}>{user.email}</a>
					</h3>

					<img src={baseUrl + user.avatar} alt={user.screenName} />
				</div>
			);
		}
	};

	return <div className="contentdetail">{renderUser()}</div>;
};
export default User;
