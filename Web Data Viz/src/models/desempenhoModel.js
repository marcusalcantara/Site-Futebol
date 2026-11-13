var database = require("../database/config");

function salvar(fkUsuario, acertos, erros, pontuacao) {
    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao)
        VALUES (${fkUsuario}, ${acertos}, ${erros}, ${pontuacao});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar
};
