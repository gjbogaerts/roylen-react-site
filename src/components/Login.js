import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Auth from '../auth/Auth';

function LoginPage() {
	let history = useHistory();
	let location = useLocation();
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [dob, setDob] = useState('');
	const [ln, setLn] = useState('');
	const [fn, setFn] = useState('');
	const [e, setE] = useState('');

	let { from } = location.state || { from: { pathname: '/' } };
	const login = () => {
		try {
			Auth.authenticate(dob, fn, ln, email, pw);
			if (Auth.isAuthenticated) {
				history.replace(from);
			} else {
				setE('Your credentials did not match. Try again.');
			}
		} catch (err) {
			setE('Your credentials did not match. Try again.');
		}
	};

	const onChangeLn = ev => {
		setLn(ev.target.value);
	};

	const onChangeFn = ev => {
		setFn(ev.target.value);
	};

	const onChangeDob = ev => {
		setDob(ev.target.value);
	};
	const onChangeEmail = ev => {
		setEmail(ev.target.value);
	};

	const onChangePw = ev => {
		setPw(ev.target.value);
	};

	// let history = useHistory();

	return Auth.isAuthenticated ? (
		<p>
			<button
				onClick={() => {
					Auth.signout(() => history.push('/'));
				}}
			>
				Sign out
			</button>
		</p>
	) : (
		<div>
			{e !== '' ? <p>{e}</p> : null}
			<input type="password" value={dob} onChange={onChangeDob} />
			<input type="password" value={fn} onChange={onChangeFn} />
			<input type="password" value={ln} onChange={onChangeLn} />
			<input type="password" value={email} onChange={onChangeEmail} />
			<input type="password" value={pw} onChange={onChangePw} />
			<button onClick={login}>Log in</button>
		</div>
	);
}
export default LoginPage;
