import express from 'express';

const contactController = {
    /**
     * Renders the contact page.
     * 
     * @param {express.Request} req - The request object.
     * @param {express.Response} res - The response object.
     */
    index: (req, res) => {
        res.render('pages/contact', { layout: 'main' });
    }
};

export default contactController;
