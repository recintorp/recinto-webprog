import axios from 'axios';
import constants from './constants';

const API = axios.create({
  baseURL: `${constants.HOST}/users`,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const fetchUsers = () => API.get('/');

export const createUser = (user) => API.post('/', user);

export const registerUser = (user) => API.post('/register', user);

export const updateUser = (id, user) => API.put(`/${id}`, user);

export const deleteUser = (id) => API.delete(`/${id}`);

export const loginUser = (credentials) => API.post('/login', credentials);