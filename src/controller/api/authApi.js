import express from 'express';

const authApi = {
    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    action: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        console.log(req.body);
        
        console.log(username, password);
        res.setHeader('Content-Type', 'application/json');
        if (!username || !password) {
            res.status(400).json({ message: 'Username and password are required' });
            return;
        }
        if (username === 'admin' && password === 'admin') {
            const session = {
                username: username,                
            };
            res.cookie('session', session);
            res.json({ message: 'Auth Action' });
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
        res.clearCookie('session');
        res.json({ message: 'Auth Logout' });
    }
};

export default authApi;
