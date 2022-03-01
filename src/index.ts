/**
 * SRC: https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
 * /
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import express from 'express';
import { projectsRouter } from './api/routing/projects.router';
import { errorHandler } from './api/common/middlewares/error.middleware';
import { notFoundHandler } from './api/common/middlewares/not-found.middleware';

dotenv.config();

/**
 * App Variables
 */
let PORT: number;
if (!process.env.PORT) {
    PORT = 7000;
    // process.exit(1);
} else {
    PORT = +process.env.PORT;
}

const app = express();

/**
 *  App Configuration
 */
app.use(express.json());
app.use('/api/projects', projectsRouter);


/**
 * Errors Handling
 */
app.use(errorHandler);
app.use(notFoundHandler);


/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`);
});
