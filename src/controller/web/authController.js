import express from 'express';

const authController = {
    /**
     * Renders the login page.
     * 
     * @param {express.Request} req - The request object.
     * @param {express.Response} res - The response object.
     */
    index: (req, res) => {
        res.render('pages/auth/login', { layout: false });
    },
    /**
     * Renders the registration page.
     * 
     * @param {express.Request} req - The request object.
     * @param {express.Response} res - The response object.
     */
    register: (req, res) => {
        res.render('pages/auth/register', { layout: false });
    }
};

export default authController;
