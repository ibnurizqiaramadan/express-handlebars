import morgan from 'morgan';
import Logger from '../systems/logger.js';

morgan.token('date', () => new Date().toISOString());
const stream = {
    write: (message) => Logger.http(message.trim()),
};

const morganMiddleware = morgan(
    ':date :remote-addr :method :url :status :res[content-length] - :response-time ms ":referrer" ":user-agent"',
    {
        stream,
        immediate: false,
    }
);

export default morganMiddleware;
