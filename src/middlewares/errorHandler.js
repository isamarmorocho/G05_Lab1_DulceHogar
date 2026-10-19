// Manejador de errores: 4 parámetros. Responde siempre en JSON.
const errorHandler = (err, req, res, next) => {
  //  a) Si el body trae JSON mal formado (err.type === "entity.parse.failed") responde 400.
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "JSON mal formado" });
  }
  const status = err.status || 500;
  
   
  //  b) Si status es 500, responde "Error interno del servidor" y agrega err.stack
  //     solo cuando process.env.NODE_ENV !== "production".
   if (status === 500) {
    const cuerpo = { error: "Error interno del servidor" };
    if (process.env.NODE_ENV !== "production") cuerpo.stack = err.stack;
    return res.status(500).json(cuerpo);
  }

  res.status(status).json({ error: err.message });
};

module.exports = errorHandler;
