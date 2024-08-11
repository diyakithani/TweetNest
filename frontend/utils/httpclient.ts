import axios from 'axios';

const client = axios.create({
  withCredentials: true,
  baseURL: 'https://tweetnest.appsinfra.in/',
  validateStatus: (status) => status != 500,
});

export default client;
