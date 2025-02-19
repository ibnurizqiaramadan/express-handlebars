import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import formData from 'express-form-data';
import os from 'os';
import './types.js';

import router from './routes/web.js';
import apiRouter from './routes/api.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morganMiddleware from './middleware/appMiddleware.js';
import sessionMiddleware from './middleware/sessionMiddleware.js';
import corsMiddleware from './middleware/corsMiddleware.js';
import Session from './systems/session.js';
dotenv.config();

const __dirname = path.resolve();
const app = express();

app.use(sessionMiddleware);
app.engine(
    'hbs',
    engine({
        layoutsDir: path.join(__dirname, 'src/views/layouts'),
        partialsDir: path.join(__dirname, 'src/views/layouts/partials'),
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('public'));
app.use(morganMiddleware);
const options = {
    uploadDir: os.tmpdir(),
    autoClean: true,
};

app.use(corsMiddleware);
app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const session = new Session(req, res);
    const sessionData = session.getSession();
    res.renderTemplate = (template, data = {}, layout = 'main') => {
        if (typeof template !== 'string') {
            throw new TypeError("Expected 'template' to be a string.");
        }
        if (typeof data !== 'object' || data === null) {
            throw new TypeError("Expected 'data' to be an object.");
        }
        if (typeof layout !== 'string') {
            throw new TypeError("Expected 'layout' to be a string.");
        }

        res.render(template, { ...data, layout, sessionData });
    };

    next();
});

app.use(router);
app.use('/api', apiRouter);

const port = process.env.APP_PORT || 3000;
const host = process.env.APP_HOST || '0.0.0.0';

app.listen(
    {
        host: host,
        port: port,
    },
    () => {
        console.info(
            `${process.env.APP_NAME} is running in ${process.env.NODE_ENV} mode`
        );
        console.info(`Web Router Loaded ${router.stack.length} routes`);
        console.info(`API Router Loaded ${apiRouter.stack.length} routes`);
        console.info(
            `Server is running on \n\thttp://${host}:${port}\n\thttp://localhost:${port}\nCtrl+C to stop`
        );
    }
);
