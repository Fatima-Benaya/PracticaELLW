const Food = require('../models/Food');

//Obtenció de tots els aliments (si es correcte enviarà un 201)
async function getAll(req, res) {
  const foods = await Food.find().sort({ createdAt: -1 });
  res.json(foods);
}

//Obtenció d'un aliment per ID
async function getById(req, res) {
  const food = await Food.findById(req.params.id);
  if (!food) return res.status(404).json({ message: 'No encontrado' });
  res.json(food);
}

//Creació d'un nou aliment
async function create(req, res) {
  const created = await Food.create(req.body);
  res.status(201).json(created);
}

//Actualització d'un aliment existent
async function update(req, res) {
  const updated = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'No encontrado' });
  res.json(updated);
}

//Eliminació d'un aliment per ID
async function remove(req, res) {
  const deleted = await Food.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'No encontrado' });
  res.status(204).send();
}

module.exports = { getAll, getById, create, update, remove };
