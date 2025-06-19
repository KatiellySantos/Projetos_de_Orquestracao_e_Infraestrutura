CREATE DATABASE IF NOT EXISTS meubanco;

USE meubanco;

CREATE TABLE IF NOT EXISTS mensagens (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  comentario TEXT
);

