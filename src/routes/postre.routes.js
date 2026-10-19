const { Router } = require("express");
const postreController = require("../controllers/postre.controller");

// RUTAS: conectan cada verbo + URL con una acción del controlador
const router = Router();

// ✅ Ya resueltas
router.get("/", postreController.list);
router.get("/:id", postreController.getById);
router.post("/", postreController.create);
router.put("/:id", postreController.update);
router.delete("/:id", postreController.remove);


module.exports = router;