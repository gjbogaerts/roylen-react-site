import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/admin.css';
import { baseUrl } from '../../api/axios';
import axios from '../../api/axios';

const Ad = props => {
	const { id } = useParams();
	const [ad, setAd] = useState(null);

	useEffect(() => {
		const getAd = async () => {
			const response = await axios.get(`/api/ads/${id}`);
			setAd(response.data);
		};
		try {
			getAd();
		} catch (err) {
			console.log(err);
		}
	}, [id]);

	const disAllow = async () => {
		//const response = axios.post('/api/ads/disallow/', )
		alert('TODO: implement backoffice for banning of ads');
		console.log('clicked' + ad._id);
	};

	const renderAd = () => {
		if (!ad) {
			return 'No ad found with this id. You should check directly in the database';
		} else {
			const date = new Date(ad.dateAdded);
			const endDate = new Date(ad.expiryDate);
			const dateOptions = {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			};
			const showDate = date.toLocaleDateString('nl-NL', dateOptions);
			const expDate = endDate.toLocaleDateString('nl-NL', dateOptions);
			return (
				<div>
					<p>
						<button onClick={disAllow} className="alert">
							Disallow this ad
						</button>
					</p>
					<h2>
						{ad.title} ({ad.virtualPrice} nix, category: {ad.category})
					</h2>
					<h3>
						{ad.creator.screenName}, with {ad.creator.nix} nix, mail:{' '}
						{ad.creator.email}
					</h3>
					<p className="details">
						{ad.adNature}, {ad.isActive ? 'active' : 'non-active'}, {showDate} -{' '}
						{expDate}
					</p>
					<p>{ad.description}</p>
					<img src={baseUrl + ad.pics[0]} alt={ad.title} />
				</div>
			);
		}
	};

	return <div className="contentdetail">{renderAd()}</div>;
};
export default Ad;
