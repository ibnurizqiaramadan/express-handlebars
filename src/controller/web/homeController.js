import express from 'express';

const homeController = {
    /**
     * Renders the home page.
     * 
     * @param {express.Request} req - The request object.
     * @param {express.Response} res - The response object.
     */
    index: (req, res) => {
        res.render('pages/home', { layout: 'main' });
    }
};

export default homeController;