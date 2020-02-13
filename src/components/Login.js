import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import fakeAuth from '../auth/fakeAuth';

function LoginPage() {
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };
	let login = () => {
		fakeAuth.authenticate(() => {
			history.replace(from);
		});
	};

	// let history = useHistory();

	return fakeAuth.isAuthenticated ? (
		<p>
			Welcome!{' '}
			<button
				onClick={() => {
					fakeAuth.signout(() => history.push('/'));
				}}
			>
				Sign out
			</button>
		</p>
	) : (
		<p>
			You must log in to view the page at {from.pathname}
			<button onClick={login}>Log in</button>
		</p>
	);
}
export default LoginPage;
