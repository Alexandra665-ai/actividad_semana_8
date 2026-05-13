const contactoRepository = require("../data/contactoRepository");

function procesarContacto(datos, callback) {
    const { nombre, email, mensaje } = datos;

    if (!nombre || !email || !mensaje) {
        return callback("Todos los campos son obligatorios");
    }

    const contacto = {
        nombre: nombre.trim(),
        email: email.trim().toLowerCase(),
        mensaje: mensaje.trim()
    };

    contactoRepository.guardarContacto(contacto, callback);
}

function obtenerContactos(callback) {
    contactoRepository.listarContactos(callback);
}

module.exports = {
    procesarContacto,
    obtenerContactos
};