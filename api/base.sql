create database examples_api;

use examples_api;

CREATE TABLE beers (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  marca varchar(255) NOT NULL,
  preco decimal(10,2) NOT NULL,
  quantidade int(11) NOT NULL,
  descricao text,
  tipo varchar(255) NOT NULL,
  volume int(11) NOT NULL
);

create database examples_api_test;

use examples_api;

CREATE TABLE beers (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  marca varchar(255) NOT NULL,
  preco decimal(10,2) NOT NULL,
  quantidade int(11) NOT NULL,
  descricao text,
  tipo varchar(255) NOT NULL,
  volume int(11) NOT NULL
);