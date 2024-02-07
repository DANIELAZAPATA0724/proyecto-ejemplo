const express = require("express");
const path = require("path");
const indexRoute = require("./routes/index");
const descargarRoute = require("./routes/descargar");

const app = express();
const port = 3000;

// Configurar motor de vistas ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configurar directorio de archivos estáticos
app.use(express.static("public"));

// Utilizar las rutas
app.use("/", indexRoute);
app.use("/descargar", descargarRoute);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
