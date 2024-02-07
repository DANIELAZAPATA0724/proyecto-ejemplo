const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const mensaje = "Hola, este mensaje es dinámico desde el servidor!";
  res.render("index", { mensaje });
});

module.exports = router;
