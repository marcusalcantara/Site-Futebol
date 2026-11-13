var desempenhoModel = require("../models/desempenhoModel");

function salvar(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var pontuacao = req.body.pontuacao;

    if (fkUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("A quantidade de acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("A quantidade de erros está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("A pontuação está undefined!");
    } else {

        desempenhoModel.salvar(fkUsuario, acertos, erros, pontuacao)
            .then(function (resultado) {
                res.status(201).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao salvar o desempenho:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }1
}

module.exports = {
    salvar
};
