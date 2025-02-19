import express from 'express';

const homeController = {
    /**
     * Renders the home page.
     *
     * @param {express.Request} req - The request object.
     * @param {import('../../types').CustomResponse} res - The response object.
     */
    index: (req, res) => {
        res.renderTemplate('pages/home', { title: 'Home Page' });
    },
};

export default homeController;
