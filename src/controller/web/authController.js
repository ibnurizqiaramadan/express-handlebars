import express from 'express';
import Session from '../../systems/session.js';

const authController = {
    /**
     * Renders the login page.
     * 
     * @param {express.Request} req - The request object.
     * @param {import('../../types').CustomResponse} res - The response object.
     */
    index: (req, res) => {
        const session = new Session(req, res);
        if (session.getSession() !== null) return res.redirect('/'); // kalau session ada, redirect ke home
        res.render('pages/auth/login', { layout: false, session });
    },
    /**
     * Renders the registration page.
     * 
     * @param {express.Request} req - The request object.
     * @param {import('../../types').CustomResponse} res - The response object.
     */
    register: (req, res) => {
        res.render('pages/auth/register', { layout: false, session });
    }
};

export default authController;
