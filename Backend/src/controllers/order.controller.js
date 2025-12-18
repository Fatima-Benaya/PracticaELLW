const Order = require('../models/Order');

// Crear un pedido (usuario autenticado)
async function createOrder(req, res) {
  try {
    const { items, totalPrice } = req.body;

    if (!items || !totalPrice) {
      return res.status(400).json({ message: 'Faltan datos del pedido' });
    }

    const order = await Order.create({
      userId: req.user.id,
      items,
      totalPrice,
      status: 'pending'
    });

    res.status(201).json(order);
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ message: 'Error creando pedido' });
  }
}

// Obtener pedidos del usuario autenticado
async function myOrders(req, res) {
  try {
    const orders = await Order
      .find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ message: 'Error obteniendo pedidos' });
  }
}

module.exports = { createOrder, myOrders };

