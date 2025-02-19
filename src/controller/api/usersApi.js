import express from 'express';
import Users from '../../models/Users.js';
const usersApi = {
    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        Users.findAll().then(users => {
            res.json(users);
        });
    },
    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    create: (req, res) => {
        res.json({ message: 'Users API' });
    },
    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
}
export default usersApi;