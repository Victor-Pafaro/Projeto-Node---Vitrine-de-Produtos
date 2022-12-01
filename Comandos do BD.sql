create database VITRINE_PRODUTOS;

USE VITRINE_PRODUTOS;

/* Tabela de Clientes */
CREATE TABLE CLIENTES(
	idClie  INT AUTO_INCREMENT NOT NULL primary key,
	cpfClie varchar(11) not null,
    nomeClie varchar(40)not null,
    idadeClie int not null,
    emailClie varchar(60) not null
);

/* Tabela de Acesso */
CREATE TABLE ACESSO(
	id_usuario INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    emailUSR VARCHAR(60) NOT NULL,
    senhaUSR VARCHAR(30) NOT NULL
);

/* Tabela de Pedido */

CREATE TABLE PEDIDO(
	numero_pedido INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    descricao_produto VARCHAR(50) NOT NULL,
    data_emissao VARCHAR(10) NOT NULL,
	quantidade INT NOT NULL,
    valor_total varchar(40) NOT NULL,
    status_pedido varchar(30) 
);

/* Tabela de Produto */
CREATE TABLE PRODUTO(
	id_produto INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome_produto VARCHAR(50) NOT NULL,
    valor_total varchar(40) NOT NULL,
    data_emissao VARCHAR(10) NOT NULL
);

CREATE TABLE ITEM_DE_PEDIDO(
	item_pedido VARCHAR(30) NOT NULL PRIMARY KEY,
    codigo_pedido VARCHAR(10) NOT NULL,
    id_produto INT NOT NULL
);

CREATE TABLE STATUS_PEDIDO(
	id_status INT NOT NULL PRIMARY KEY,
    codigo_pedido VARCHAR(10) NOT NULL,
    descricao_status VARCHAR(15) NOT NULL
);

select * from acesso;

select * from clientes;

select * from pedido;

select * from produto;

insert into clientes (cpfClie,nomeClie,idadeClie,emailClie) VALUES('121231212', 'Vitoto', 12, 'bv@vb.com');

insert into acesso(emailUSR,senhaUSR) VALUES('vct@vct.com', 123);

/* Inserção dos produtos */
insert into produto(nome_produto,valor_total, data_emissao) VALUES('Camiseta do Brasil Masculina', '250,00', '04/12/2022');

insert into produto(nome_produto,valor_total, data_emissao) VALUES('Camiseta da Inglaterra Masculina', '220,00', '04/12/2022');

insert into produto(nome_produto,valor_total, data_emissao) VALUES('Camiseta da França Masculina', '150,00', '04/12/2022');

insert into produto(nome_produto,valor_total, data_emissao) VALUES('Camiseta da Argentina Feminina', '180,00', '04/12/2022');

drop table acesso;
drop table clientes;
drop table produto;
drop table pedido;


