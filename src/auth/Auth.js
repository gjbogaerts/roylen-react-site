import axios from '../api/axios';

const Auth = {
	isAuthenticated: false,
	authenticate(dob, fn, ln, email, pw) {
		try {
			const getAuth = async data => {
				const response = await axios.post('/api/admin', data);
				if (response.data.result === 1) {
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
		Auth.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

export default Auth;
