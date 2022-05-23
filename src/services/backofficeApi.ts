import axios from 'axios';

const backofficeApi = axios.create({
  baseURL: process.env.REACT_APP_BACKOFFICE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default backofficeApi;
