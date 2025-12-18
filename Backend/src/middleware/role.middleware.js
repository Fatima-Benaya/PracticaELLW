//La seva funció es permetre o denegar l'accés a una ruta segons el rol de l'usuari.
function requireRole(...roles) {
  return (req, res, next) => {
    //Comprova que l'usuari està autenticat
    if (!req.user) return res.status(401).json({ message: 'No autenticado' });
    //Comprova el rol de l'usuari
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'No autorizado' });
    }
    next();
  };
}

//Exportació.
module.exports = { requireRole };
