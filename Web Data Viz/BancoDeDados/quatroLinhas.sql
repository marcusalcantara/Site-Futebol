CREATE database quatroLinhas;
USE quatroLinhas;

CREATE TABLE usuario(
idUsuario INT primary key auto_increment,
nome VARCHAR(45),
email VARCHAR(50),
senha VARCHAR(50)
);	

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
acertos INT NOT NULL,
erros INT NOT NULL,
pontuacao INT NOT NULL,
dataTentativa DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


SELECT * FROM usuario;