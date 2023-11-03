const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Accediste a la ruta / mediante GET");
});

module.exports = router;
