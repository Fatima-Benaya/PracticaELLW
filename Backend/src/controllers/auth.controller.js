const bcrypt = require('bcrypt');   //Importem la llibreria per xifrar
const jwt = require('jsonwebtoken'); //S'utilitza per crear i verificar els tokens JWT
const User = require('../models/User'); //Importa el model de usuari

//Funció per signar el token JWT
function signToken(user) {
  return jwt.sign(
    { sub: user._id.toString(), role: user.role, email: user.email },
    process.env.JWT_SECRET, //clau secreta per signar el token
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );
}

//Funció per registrar un nou usuari
async function register(req, res) {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email ya registrado' });

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.create({ name, email, passwordHash, role: 'user' });

  const token = signToken(user);
  //Envia resposta HTTP 201 Created i un JSON.
  return res.status(201).json({
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role }
  });
}

//Funció per l'inici de sessió d'un usuari existent
async function login(req, res) {
  const { email, password } = req.body;

  //Busca l'usuari per email
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: 'Credenciales inválidas' });

  const token = signToken(user);
  return res.json({
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role }
  });
}

//Exporta les funcions per poder utilitzar-les a routes
module.exports = { register, login };
