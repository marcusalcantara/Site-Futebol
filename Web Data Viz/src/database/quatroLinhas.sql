-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE database quatroLinhas;
USE quatroLinhas;

CREATE TABLE cadastro(
idUsuario INT primary KEY auto_increment,
nome VARCHAR(45),
email VARCHAR(50),
senha VARCHAR(50)
);	

select * from cadastro;

