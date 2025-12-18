//Importa les dependències necessàries
const express = require('express');
const { register, login } = require('../controllers/auth.controller');

//Creació del router
const router = express.Router();

//Defineix una ruta POST per al registre i una altra per al login
router.post('/register', register);
router.post('/login', login);

//Exportació
module.exports = router;
