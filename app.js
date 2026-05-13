


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const contactoRoutes = require("./routes/contactoRoutes");
const logger = require("./middlewares/logger");

const app = express();
const puerto = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", contactoRoutes);

app.use((req, res) => {
    res.status(404).json({
        ok: false,
        mensaje: "Ruta no encontrada"
    });
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});