var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.post("/", function (req, res) {
    desempenhoController.salvar(req, res);
});

module.exports = router;