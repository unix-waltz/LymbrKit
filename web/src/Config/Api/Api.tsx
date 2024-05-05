import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://127.0.0.1:4000/api/', 
  withCredentials: true, 
});

export default Api;
