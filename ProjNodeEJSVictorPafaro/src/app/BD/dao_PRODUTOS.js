class dao_PRODUTOS {
    // construtor da classe
    // objetiva é criar a conexão com o BD
    constructor(db) {
        // _db = atributo da classe dao_CLIENTES
        // db = parâmetro do construtor
        this._db = db;
    }

    dadosDoProdutoCamisaBrasil(){
        /* Com valor_total
        return new Promise((resolve,reject) => { 
            var sql = 'SELECT nome_produto, valor_total FROM PRODUTO WHERE nome_produto = "Camiseta do Brasil Masculina"';
            this._db.query(sql, [],function(erro,listagem) {
            if (erro) {
                console.log(erro);
                return reject('Lista de PRODUTOS FALHOU!'); 
            }
            resolve(listagem);
            });
        });
        */

        // sem valor total
        return new Promise((resolve,reject) => { 
            var sql = 'SELECT nome_produto, valor_unitario FROM PRODUTO WHERE nome_produto = "Camiseta do Brasil Masculina"';
            this._db.query(sql, [],function(erro,listagem) {
            if (erro) {
                console.log(erro);
                return reject('Lista de PRODUTOS FALHOU!'); 
            }
            resolve(listagem);
            });
        });
    }

    dadosDoProdutoCamisaInglaterra(){
        return new Promise((resolve,reject) => { 
            var sql = 'SELECT nome_produto, valor_unitario FROM PRODUTO WHERE nome_produto = "Camiseta da Inglaterra Masculina"';
            this._db.query(sql, [],function(erro,listagem) {
            if (erro) {
                console.log(erro);
                return reject('Lista de PRODUTOS FALHOU!'); 
            }
            resolve(listagem);
            });
        });
    }

    dadosDoProdutoCamisaFranca(){
        return new Promise((resolve,reject) => { 
            var sql = 'SELECT nome_produto, valor_unitario FROM PRODUTO WHERE nome_produto = "Camiseta da Franca Masculina"';
            this._db.query(sql, [],function(erro,listagem) {
            if (erro) {
                console.log(erro);
                return reject('Lista de PRODUTOS FALHOU!'); 
            }
            resolve(listagem);
            });
        });
    }

    dadosDoProdutoCamisaArgentina(){
        return new Promise((resolve,reject) => { 
            var sql = 'SELECT nome_produto, valor_unitario FROM PRODUTO WHERE nome_produto = "Camiseta da Argentina Feminina"';
            this._db.query(sql, [],function(erro,listagem) {
            if (erro) {
                console.log(erro);
                return reject('Lista de PRODUTOS FALHOU!'); 
            }
            resolve(listagem);
            });
        });
    }
}

module.exports = dao_PRODUTOS;