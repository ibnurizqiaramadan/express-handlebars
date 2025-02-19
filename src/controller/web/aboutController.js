import express from 'express';

const aboutController = {
    /**
     * Renders the about page.
     * 
     * @param {express.Request} req - The request object.
     * @param {express.Response} res - The response object.
     */
    index: (req, res) => {
        res.render('pages/about', { layout: 'main' });
    }
};

export default aboutController;
