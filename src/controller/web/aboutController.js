import express from 'express';
const aboutController = {
    /**
     * Renders the about page.
     *
     * @param {express.Request} req - The request object.
     * @param {import('../../types').CustomResponse} res - The response object.
     */
    index: (req, res) => {
        res.renderTemplate('pages/about', { title: 'About Page' });
    },
};

export default aboutController;
