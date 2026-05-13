const conexion = require("../db/conexion");

function guardarContacto(contacto, callback) {
    const sql = "INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)";
    const valores = [contacto.nombre, contacto.email, contacto.mensaje];

    conexion.query(sql, valores, callback);
}

function listarContactos(callback) {
    const sql = "SELECT * FROM contactos";
    conexion.query(sql, callback);
}

module.exports = {
    guardarContacto,
    listarContactos
};