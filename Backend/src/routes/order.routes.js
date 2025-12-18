const express = require('express');
const { authRequired } = require('../middleware/auth.middleware');
const { createOrder, myOrders } = require('../controllers/order.controller');

const router = express.Router();

//Creació d'una nova comanda i obtenció de les comandes de l'usuari autenticat
router.post('/', authRequired, createOrder);
router.get('/mine', authRequired, myOrders);

module.exports = router;
