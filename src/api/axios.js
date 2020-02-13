import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

const connection = axios.create({
	baseURL: baseUrl
});

export default connection;
