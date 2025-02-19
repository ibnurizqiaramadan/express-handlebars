import jwt from 'jsonwebtoken';

const sessionCookieName = 'session';

class Session {
    /**
     * @param {import('express').Request} req 
     * @param {import('express').Response} res
     */
    constructor(req, res, checkPath = []) {
        this.session = null;
        this.req = req;
        this.res = res;
        this.checkPath = checkPath;
    }   

    isIncludePath() {
        if (this.checkPath.length === 0) {
            return false;
        }        
        console.log(this.req.path);
        for (const path of this.checkPath) {
            const regex = new RegExp('^' + path.replace(/\*/g, '.*') + '$');
            if (regex.test(this.req.path)) {
                return true;
            }
        }
        return false;
    }

    setSession(session) {
        const sessionToken = jwt.sign(session, process.env.APP_SESSION_SECRET, { expiresIn: process.env.APP_SESSION_EXPIRE });
        this.res.cookie(sessionCookieName, sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: process.env.APP_SESSION_EXPIRE,
            path: '/',
            sameSite: 'strict',
        });
    }

    getSession() {
        try {
            const cookie = this.req.headers.cookie;
            const sessionToken = cookie.split('; ').find(row => row.startsWith(sessionCookieName)).split('=')[1];
            return jwt.verify(sessionToken, process.env.APP_SESSION_SECRET);
        } catch (error) {
            return null;
        }
    }

    destroySession() {
        this.res.clearCookie(sessionCookieName);
    }
}

export default Session;
