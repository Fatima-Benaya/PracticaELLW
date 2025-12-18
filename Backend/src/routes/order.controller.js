const Order = require('../models/Order');

//Creació d'una nova comanda
async function createOrder(req, res) {
  const { items, totalPrice } = req.body;

  //Crea la comanda amb l'usuari autenticat
  const order = await Order.create({
    userId: req.user.id,
    items,
    totalPrice,
    status: 'pending'
  });

  //Envia resposta HTTP 201 Created i un JSON.
  res.status(201).json(order);
}

//Obtenció de les comandes de l'usuari autenticat
async function myOrders(req, res) {
  const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(orders);
}

module.exports = { createOrder, myOrders };
