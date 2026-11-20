-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
CREATE database quatroLinhas;
USE quatroLinhas;

CREATE TABLE usuario(
idUsuario INT primary key auto_increment,
nome VARCHAR(45),
email VARCHAR(50),
senha VARCHAR(50)
);	

CREATE TABLE login(
fkUsuario INT PRIMARY KEY,
email VARCHAR(50) NOT NULL UNIQUE,
senha VARCHAR(50) NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO login (fkUsuario, email, senha)
SELECT idUsuario, email, senha FROM usuario;

ALTER TABLE usuario DROP COLUMN email, DROP COLUMN senha;

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT, 
acertos INT NOT NULL,
erros INT NOT NULL,
pontuacao INT NOT NULL,
dataTentativa DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE OR REPLACE VIEW vw_desempenho AS
SELECT
    idQuiz,
    fkUsuario,
    acertos,
    erros,
    pontuacao,
    dataTentativa,
	ROUND(acertos / NULLIF(acertos + erros, 0) * 100, 1) AS aproveitamento
FROM quiz;

SELECT * from vw_desempenho;
SELECT * FROM usuario;
SELECT * FROM quiz;

truncate quiz;