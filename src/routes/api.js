import express from 'express';
import authApi from '../controller/api/authApi.js';
import usersApi from '../controller/api/usersApi.js';

const api = express.Router();

api.post('/auth/action', authApi.action);
api.post('/auth/register', authApi.register);
api.post('/auth/logout', authApi.logout);

api.get('/users', usersApi.index);
api.post('/users', usersApi.create);

export default api;


