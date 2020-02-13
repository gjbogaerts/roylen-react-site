import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import axios from '../../api/axios';
import Ad from './Ad';

const Ads = props => {
	let { path, url } = useRouteMatch();
	const [ads, setAds] = useState([]);

	useEffect(() => {
		const getAds = async () => {
			const response = await axios.get('/api/ads');
			setAds(response.data);
		};
		getAds();
	}, []);

	const renderAds = () => {
		return (
			<ol className="contentlist">
				{ads.map(ad => {
					return (
						<li key={ad._id}>
							<Link to={`${url}/${ad._id}`}>{ad.title}</Link>
						</li>
					);
				})}
			</ol>
		);
	};

	return (
		<div>
			{ads && ads.length ? renderAds() : <p>No ads to display.</p>}
			<Switch>
				<Route path={`${path}/:id`} children={<Ad ads={ads} />} />
			</Switch>
		</div>
	);
};

export default Ads;
