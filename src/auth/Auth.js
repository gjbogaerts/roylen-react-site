import axios from '../api/axios';

const Auth = {
	isAuthenticated: false,
	setAuthentication() {
		Auth.isAuthenticated = true;
	},
	authenticate(dob, fn, ln, email, pw) {
		try {
			const getAuth = async data => {
				const response = await axios.post('/api/admin/auth', data);
				if (response.data.result === 1) {
					sessionStorage.setItem('token', response.data.token);
					Auth.isAuthenticated = true;
				} else {
					Auth.isAuthenticated = false;
				}
			};
			const data = { dob, fn, ln, email, pw };
			getAuth(data);
		} catch (e) {
			Auth.isAuthenticated = false;
		}
	},
	signout(cb) {
		sessionStorage.clear();
		Auth.isAuthenticated = false;
		cb();
	}
};

export default Auth;
