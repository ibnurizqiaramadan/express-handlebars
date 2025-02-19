// create a database connection
import { Sequelize } from 'sequelize';

// Check if the necessary environment variables are set
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

let sequelize;

if (!dbName || !dbUser || !dbPassword || !dbHost || !dbPort) {
    sequelize = null;
} else {
    sequelize = new Sequelize(dbName, dbUser, dbPassword, {
        host: dbHost,
        port: dbPort,
        dialect: 'mysql',
        logging: false,
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });

    sequelize.sync({ force: true });
}
export default sequelize;
