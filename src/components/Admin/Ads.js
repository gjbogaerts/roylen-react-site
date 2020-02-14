import React, { useState, useEffect } from 'react';
import {
	Switch,
	Route,
	Link,
	useRouteMatch,
	useHistory
} from 'react-router-dom';
import axios from '../../api/axios';
import Ad from './Ad';

const Ads = props => {
	let { path, url } = useRouteMatch();
	const [ads, setAds] = useState([]);
	const [search, setSearch] = useState('');
	const history = useHistory();

	useEffect(() => {
		const getAds = async () => {
			const response = await axios.get('/api/ads');
			setAds(response.data);
		};
		getAds();
	}, []);

	const startSearch = () => {
		// console.log(search);
		// const response = await axios.get(`/api/ads/${search}`);
		// console.log(response);
		history.push(`${url}/${search}`);
		// setAds(response.data);
		// console.log(search, response);
	};

	const handleChange = ev => {
		setSearch(ev.target.value);
	};

	const renderAds = () => {
		return (
			<div className="contentlist">
				<p>The latest 20 ads</p>
				<ol>
					{ads.map(ad => {
						return (
							<li key={ad._id}>
								<Link to={`${url}/${ad._id}`}>{ad.title}</Link>
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
					placeholder="type or copy id of the ad"
					className="search"
					onChange={handleChange}
					value={search}
				/>
				<button onClick={startSearch}>Start search</button>
			</div>
			{ads && ads.length ? renderAds() : <p>No ads to display.</p>}
			<Switch>
				<Route path={`${path}/:id`}>
					<Ad />
				</Route>
				{/* <Route path={`${path}`} children={<Ad />} /> */}
			</Switch>
		</div>
	);
};

export default Ads;
