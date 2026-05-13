const express = require("express");
const router = express.Router();

const contactoController = require("../controllers/contactoController");

router.get("/status", contactoController.estadoServidor);
router.get("/contactos", contactoController.listarContactos);
router.post("/contacto", contactoController.crearContacto);

module.exports = router;