var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.post("/", function (req, res) {
    desempenhoController.salvar(req, res);
});

router.get("/:fkUsuario", function (req, res) {
    desempenhoController.listarPorUsuario(req, res);
});

module.exports = router;