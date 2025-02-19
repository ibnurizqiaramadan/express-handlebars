import express from 'express';
const contactController = {
    /**
     * Renders the contact page.
     *
     * @param {express.Request} req - The request object.
     * @param {import('../../types').CustomResponse} res - The response object.
     */
    index: (req, res) => {
        res.renderTemplate('pages/contact', { title: 'Contact Page' });
    },
};

export default contactController;
