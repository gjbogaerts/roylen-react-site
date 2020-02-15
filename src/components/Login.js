import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Auth from '../auth/Auth';

function LoginPage() {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: '/' } };

	useEffect(() => {
		const tryForToken = async () => {
			const token = await sessionStorage.getItem('token');
			if (token) {
				Auth.setAuthentication();
				if (Auth.isAuthenticated) {
					history.replace(from);
				}
			}
		};
		tryForToken();
	}, [from, history]);

	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [dob, setDob] = useState('');
	const [ln, setLn] = useState('');
	const [fn, setFn] = useState('');
	const [e, setE] = useState('');

	const login = () => {
		try {
			const authenticate = async () => {
				Auth.authenticate(dob, fn, ln, email, pw);
				if (Auth.isAuthenticated) {
					history.replace(from);
				} else {
					setE('Your credentials did not match. Try again.');
				}
			};
			authenticate();
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

	return (
		<div>
			{e !== '' ? <p>{e}</p> : null}
			<input type="password" name="a" value={dob} onChange={onChangeDob} />
			<input type="password" name="b" value={fn} onChange={onChangeFn} />
			<input type="password" name="c" value={ln} onChange={onChangeLn} />
			<input type="password" name="d" value={email} onChange={onChangeEmail} />
			<input type="password" name="e" value={pw} onChange={onChangePw} />
			<button onClick={login}>Log in</button>
		</div>
	);
}
export default LoginPage;
