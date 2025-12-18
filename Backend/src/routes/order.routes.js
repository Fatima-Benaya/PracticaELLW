const express = require('express');
const { authRequired } = require('../middleware/auth.middleware');
const { createOrder, myOrders } = require('../controllers/order.controller');

const router = express.Router();

router.post('/', authRequired, createOrder);
router.get('/mine', authRequired, myOrders);

module.exports = router;
