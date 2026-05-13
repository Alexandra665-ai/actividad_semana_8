const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "formularioDB"
});

conexion.connect((error) => {
    if (error) {
        console.log("Error de conexión a MySQL:", error);
        return;
    }

    console.log("Conexión exitosa a la base de datos");
});

module.exports = conexion;