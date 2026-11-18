var database = require("../database/config");

function salvar(fkUsuario, acertos, erros, pontuacao) {
    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao)
        VALUES (${fkUsuario}, ${acertos}, ${erros}, ${pontuacao});
    `;
    return database.executar(instrucaoSql);
}

function listarPorUsuario(fkUsuario) {
    var instrucao = `
        SELECT * FROM vw_desempenho
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY dataTentativa ASC, idQuiz ASC;`;
    return database.executar(instrucao);
}

module.exports = {
    salvar,
    listarPorUsuario
};
