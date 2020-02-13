import React from 'react';
import { useParams } from 'react-router-dom';

const Ad = props => {
	let { id } = useParams();
	return <div>This is the Ad component with id {id}</div>;
};

export default Ad;
