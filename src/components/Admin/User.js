import React from 'react';
import { useParams } from 'react-router-dom';

const User = props => {
	let { id } = useParams();
	return <div>This is the User component with id {id}</div>;
};

export default User;
