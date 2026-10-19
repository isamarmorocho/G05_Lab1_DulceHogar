const logger = (req, res, next) => {
   const inicio = Date.now();
  // "finish" se dispara cuando la respuesta ya se envió: ahí ya conocemos el código
  res.on("finish", () => {
    const ms = Date.now() - inicio;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} → ${res.statusCode} (${ms} ms)`
    );
  });
  next(); 
};

module.exports = logger;
