import express from 'express';

const dashboardController = {
    /**
     * Renders the Dashboard page.
     *
     * @param {express.Request} req - The request object.
     * @param {import('../../../types').CustomResponse} res - The response object.
     */
    index: (req, res) => {
        res.renderTemplate(
            'pages/admin/dashboard',
            {
                title: 'Dashboard Page',
            },
            'admin'
        );
    },
};

export default dashboardController;
