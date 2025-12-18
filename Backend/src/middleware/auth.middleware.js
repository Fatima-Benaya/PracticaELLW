//Middleware d'autenticació en Express per a protegir rutes utilizant JWT.

//Importació de la llibreria
const jwt = require('jsonwebtoken');

function authRequired(req, res, next) {

    //Lectura del token desde la capçalera
  const header = req.headers.authorization || '';
  const [type, token] = header.split(' ');

  //Validació del format del token
  if (type !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Falta token' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Validació de contingut
    if (!payload.sub || !payload.role) {
      return res.status(401).json({ message: 'Token inválido (payload incompleto)' });
    }

    //Es guarda l'usuari a req.
    req.user = {
      id: payload.sub,
      role: payload.role,
      email: payload.email
    };

    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
}

//Exportació.
module.exports = { authRequired };
