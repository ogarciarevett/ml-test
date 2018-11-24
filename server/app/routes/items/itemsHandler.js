require('rootpath')();
const debug = require('debug')('mlgateway:itemsHandler');
const HTTP_STATUSES = require('http-status-codes');
const devConsole = require('app/utils/devConsole');
const ItemsController = require('./itemsController');
const ItemsValidator = require('./itemsValidator');

class ItemsHandler {
    static async find(req, res, next) {
        try {
            const { query } = req;
            await ItemsValidator.validateSearch(query);
            const items = await ItemsController.getAll(query.search);
            res.status(HTTP_STATUSES.OK).json(items);
        } catch (error) {
            debug(`${devConsole.error(error)}`);
            debug(`${devConsole.error('Error getting all the items')}`);
            next(error);
        }
    }

    static async findById(req, res, next) {
        try {
            const { params } = req;
            await ItemsValidator.validateIdParam(params);
            const item = await ItemsController.getID(params.id);
            res.status(HTTP_STATUSES.OK).json(item);
        } catch (error) {
            debug(`${devConsole.error(error)}`);
            debug(`${devConsole.error(`Error getting the item with the id: ${req.params.id}`)}`);
            next(error);
        }
    }
}

module.exports = ItemsHandler;
