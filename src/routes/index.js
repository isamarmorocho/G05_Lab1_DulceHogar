const { Router } = require("express");
const postreRoutes = require("./postre.routes");

// Archivo principal de rutas: cada recurso se monta en su propio prefijo
const router = Router();

router.use("/postres", postreRoutes); // → /api/postres

module.exports = router;