import express from 'express';
import authApi from '../controller/api/authApi.js';

const api = express.Router();

api.post('/auth/action', authApi.action);
api.post('/auth/register', authApi.register);
api.post('/auth/logout', authApi.logout);

export default api;


