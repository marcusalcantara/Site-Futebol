var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT u.idUsuario, u.nome, l.email
        FROM usuario u
        JOIN login l ON l.fkUsuario = u.idUsuario
        WHERE l.email = '${email}' AND l.senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var sqlUsuario = `
        INSERT INTO usuario (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + sqlUsuario);

    return database.executar(sqlUsuario).then(function (resultadoUsuario) {
        var idUsuario = resultadoUsuario.insertId;

        var sqlLogin = `
            INSERT INTO login (fkUsuario, email, senha)
            VALUES (${idUsuario}, '${email}', '${senha}');
        `;
        console.log("Executando a instrução SQL: \n" + sqlLogin);

        return database.executar(sqlLogin)
            .then(function () {
                return resultadoUsuario;
            })
            .catch(function (erro) {
                var sqlDesfazer = `DELETE FROM usuario WHERE idUsuario = ${idUsuario};`;
                return database.executar(sqlDesfazer).then(
                    function () { throw erro; },
                    function () { throw erro; }
                );
            });
    });
}

module.exports = {
    autenticar,
    cadastrar
};