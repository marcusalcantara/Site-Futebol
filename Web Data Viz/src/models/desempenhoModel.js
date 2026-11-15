var database = require("../database/config");

function salvar(fkUsuario, acertos, erros, pontuacao) {
    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao)
        VALUES (${fkUsuario}, ${acertos}, ${erros}, ${pontuacao});
    `;
    return database.executar(instrucaoSql);
}

function listarPorUsuario(fkUsuario) {
    var instrucaoSql = `
        SELECT idQuiz, acertos, erros, pontuacao, dataTentativa
        FROM quiz
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY dataTentativa ASC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar,
    listarPorUsuario
};
