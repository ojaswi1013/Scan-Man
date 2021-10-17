import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://scan-man-backend.herokuapp.com/',
});

export default instance;