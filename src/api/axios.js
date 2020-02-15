import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

const connection = axios.create({
	baseURL: baseUrl
});

connection.interceptors.request.use(
	config => {
		const token = sessionStorage.getItem('token');

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	err => {
		console.log(err);
		return Promise.reject(err);
	}
);

export default connection;
