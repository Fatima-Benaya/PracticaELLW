const express = require('express');
const { authRequired } = require('../middleware/auth.middleware');
const { requireRole } = require('../middleware/role.middleware');
const ctrl = require('../controllers/food.controller');

const router = express.Router();

// qualsevol usuari autenticat pot veure la llista d'aliments i els detalls d'un aliment
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);

// sol l'administrador pot crear, actualitzar o eliminar aliments
router.post('/', authRequired, requireRole('admin'), ctrl.create);
router.put('/:id', authRequired, requireRole('admin'), ctrl.update);
router.delete('/:id', authRequired, requireRole('admin'), ctrl.remove);

module.exports = router;
