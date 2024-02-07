const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  const archivo = path.join(__dirname, '../public/archivo.txt');
  res.download(archivo, 'archivo_descargado.txt');
});

module.exports = router;