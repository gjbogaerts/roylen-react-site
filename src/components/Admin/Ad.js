import React from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/admin.css';
import { baseUrl } from '../../api/axios';

const Ad = ({ ads }) => {
	let { id } = useParams();
	const renderAd = () => {
		const currentAd = ads.filter(ad => ad._id === id);
		if (!currentAd.length) {
			return 'No ad found with this id. You should check directly in the database';
		} else {
			const ad = currentAd[0];
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
