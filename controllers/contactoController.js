const contactoService = require("../services/contactoService");

function crearContacto(req, res) {
    contactoService.procesarContacto(req.body, (error) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                mensaje: error
            });
        }

        res.status(201).json({
            ok: true,
            mensaje: "Formulario enviado correctamente"
        });
    });
}

function listarContactos(req, res) {
    contactoService.obtenerContactos((error, resultados) => {
        if (error) {
            return res.status(500).json({
                ok: false,
                mensaje: "Error al obtener contactos"
            });
        }

        res.status(200).json(resultados);
    });
}

function estadoServidor(req, res) {
    res.status(200).json({
        ok: true,
        mensaje: "Servidor funcionando correctamente"
    });
}

module.exports = {
    crearContacto,
    listarContactos,
    estadoServidor
};