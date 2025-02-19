import express from 'express';
import homeController from '../controller/web/homeController.js';
import aboutController from '../controller/web/aboutController.js';
import contactController from '../controller/web/contactController.js';
import authController from '../controller/web/authController.js';

const web = express.Router();

web.get('/', homeController.index);
web.get('/about', aboutController.index);
web.get('/contact', contactController.index);
web.get('/auth', authController.index);
web.get('/auth/register', authController.register);

export default web;
