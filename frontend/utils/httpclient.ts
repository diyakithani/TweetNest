import axios from 'axios';

const client = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3001/',
  validateStatus: (status) => status != 500,
});

export default client;
