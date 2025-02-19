import Session from '../systems/session.js';

const sessionMiddleware = (req, res, next) => {
  // list yang perlu di cek session
  const session = new Session(req, res, [
    '/auth/destroy',
    '/dashboard',
    '/dashboard/*',
  ]);
  const sessionData = session.getSession();
  const isIncludePath = session.isIncludePath();
  
  if (sessionData === null && isIncludePath) {
    return res.redirect('/auth'); // kalau session tidak ada, redirect ke login
  }
  next();
};

export default sessionMiddleware;
