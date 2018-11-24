require('rootpath')();
const HTTP_STATUS = require('http-status-codes');
const NotFoundError = require('app/utils/errors/NotFoundError');
const BadRequestError = require('app/utils/errors/BadRequestError');
const ServerError = require('app/utils/errors/ServerError');
const devConsole = require('app/utils/devConsole');

const errorInstances = [
    NotFoundError,
    BadRequestError,
    ServerError
];

const checkErrorInstance = (error) => errorInstances.some((customError) => error instanceof customError);

module.exports = () => (error, req, res, next) => {
    if (checkErrorInstance(error)) {
        res.status(error.status).json({
            success: false,
            // message: isProductionEnv ? error.defaultMessage : error.message,
            message: error.message,
            code: error.status
        });
    } else {
        devConsole.error(
            `Catching uncaught error from path: ${req.path}. Err: ${error}`,
        );

        const status = HTTP_STATUS.INTERNAL_SERVER_ERROR;

        const errorMessage = error.message || 'An unknown error occurred';

        const errorInfo = error;

        const jsonResponse = {
            success: false,
            code: status,
            message: errorMessage,
            error: errorInfo
        };

        res.status(status).json(jsonResponse);
    }
};
