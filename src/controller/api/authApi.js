import express from 'express';
import SessionClass from '../../systems/session.js';

const authApi = {
    /**
     *
     * @param {express.Request} req
     * @param {express.Response} res
     */
    action: (req, res) => {
        const Session = new SessionClass(req, res);
        const username = req.body.username;
        const password = req.body.password;
        console.log(req.body);

        console.log(username, password);
        res.setHeader('Content-Type', 'application/json');
        if (!username || !password) {
            res.status(400).json({
                message: 'Username and password are required',
            });
            return;
        }
        if (username === 'admin' && password === 'admin') {
            const session = {
                username: username,
            };
            Session.setSession(session);
            res.json({
                statusCode: 200,
                message: 'Login Success',
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    },
    /**
     *
     * @param {express.Request} req
     * @param {express.Response} res
     */
    register: (req, res) => {
        res.json({ message: 'Auth Register' });
    },
    /**
     *
     * @param {express.Request} req
     * @param {express.Response} res
     */
    logout: (req, res) => {
        const Session = new SessionClass(req, res);
        Session.destroySession();
        res.redirect('/auth');
    },
};

export default authApi;
