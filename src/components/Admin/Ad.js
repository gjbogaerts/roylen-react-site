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
		const response = await axios.post('/api/admin/ads/forbid/', { id: ad._id });
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

	const allow = async () => {
		const response = await axios.post('api/admin/ads/unforbid', { id: ad._id });
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
						{ad.isForbidden ? (
							<button onClick={allow} className="alert">
								Allow this ad
							</button>
						) : (
							<button onClick={disAllow} className="alert">
								Disallow this ad
							</button>
						)}
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
