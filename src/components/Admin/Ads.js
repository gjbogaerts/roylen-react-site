import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Ad from './Ad';

const Ads = props => {
	let { path, url } = useRouteMatch();
	return (
		<div>
			This is the Ads component
			<ul>
				<li>
					<Link to={`${url}/12`}>Ad with id 12</Link>
				</li>
				<li>
					<Link to={`${url}/14`}>Ad with id 14</Link>
				</li>
				<li>
					<Link to={`${url}/15`}>Ad with id 15</Link>
				</li>
			</ul>
			<Switch>
				<Route path={`${path}/:id`} children={<Ad />} />
			</Switch>
		</div>
	);
};

export default Ads;
