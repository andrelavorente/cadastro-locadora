CREATE TABLE cliente (
  nome varchar(100) not null,
  sobrenome varchar(100) not null,
  endereco varchar (300) not null,
  cpf varchar(14) not null primary key,
  cidade varchar (100) not null,
  telefone varchar (14) not null
);