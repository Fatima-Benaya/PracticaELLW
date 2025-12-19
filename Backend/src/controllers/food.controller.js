const mongoose = require('mongoose');
const Food = require('../models/Food');

// Obtener todos los alimentos
async function getAll(req, res) {
  const foods = await Food.find().sort({ createdAt: -1 });
  res.json(foods);
}

// Obtener un alimento por ID
async function getById(req, res) {
  const { id } = req.params;

  // Validar ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID no válido' });
  }

  const food = await Food.findById(id);

  if (!food) {
    return res.status(404).json({ message: 'No encontrado' });
  }

  res.json(food);
}

// Crear alimento
async function create(req, res) {
  const created = await Food.create(req.body);
  res.status(201).json(created);
}

// Actualizar alimento
async function update(req, res) {
  const updated = await Food.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updated) {
    return res.status(404).json({ message: 'No encontrado' });
  }

  res.json(updated);
}

// Eliminar alimento
async function remove(req, res) {
  const deleted = await Food.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'No encontrado' });
  }

  res.status(204).send();
}

// ⬅️ EXPORTAR SIEMPRE AL FINAL
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};

