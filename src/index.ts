/**
 * SRC: https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
 * /
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import express from 'express';
import { projectsRouter } from './shared/routing/projects.router';

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = +process.env.PORT;

const app = express();

/**
 *  App Configuration
 */
app.use(express.json());
app.use('/api/projects', projectsRouter);

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`);
});
