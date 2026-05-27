import axios from 'axios';
import constants from './constants';

const API = axios.create({
  baseURL: `${constants.HOST}/articles`,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const fetchArticles = () => API.get('/');

export const createArticle = (formData) => API.post('/', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const updateArticle = (id, formData) => API.put(`/${id}`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const deleteArticle = (id) => API.delete(`/${id}`);