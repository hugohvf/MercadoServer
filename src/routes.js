const { Router } = require('express');
const routes = Router();
const getDateDelivery = require('./helpers/dateDelivery');
const OrderController = require('./controllers/OrderController');

routes.post('/order', OrderController.store);

routes.get('/date', (request, response) => {
    var date = getDateDelivery();
    return response.json(date)
});

module.exports = routes;