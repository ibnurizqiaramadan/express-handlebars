import express from 'express';
import Users from '../../models/Users.js';
const usersApi = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    index: (req, res) => {
        Users.findAll().then(users => {
            res.json(users);
        });
    },
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create: (req, res) => {
        res.json({ message: 'Users API' });
    },
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
}
export default usersApi;