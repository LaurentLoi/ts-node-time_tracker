import HttpException from '../exceptions/http-exception';
import { Request, Response, NextFunction } from 'express';

/**
 * From: https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/:
 *  "[...]you must provide four arguments to identify a function as an error-handling
 *  middleware function in Express. [...]"
 *  Ref: https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling
 */

export const errorHandler = (
    error: HttpException,
    request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
) => {
    const status = error.statusCode || error.status || 500;

    response.status(status).send(error);
};
