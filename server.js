const express = require("express");
const app = express();
const rutas = require("./Routes");

app.use("/", rutas);

app.listen(3000, () => {
  console.log("Servidor levantado en el puerto 3000");
});
