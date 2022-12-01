class dao_PEDIDOS {
    // construtor da classe
    // objetiva é criar a conexão com o BD
    constructor(db) {
        // _db = atributo da classe dao_CLIENTES
        // db = parâmetro do construtor
        this._db = db;
    }

    
    dadosDosPedidos(){
        return new Promise((resolve,reject) => { 
            var sql = 'SELECT numero_pedido, descricao_produto, data_emissao, quantidade, valor_total, status_pedido FROM PEDIDO ORDER BY numero_pedido';
            this._db.query(sql, [],function(erro,listagem) {
            if (erro) {
                console.log(erro);
                return reject('Lista de PEDIDOS FALHOU!'); 
            }
            resolve(listagem);
            });
        });
    }

    /**********************  TESTE ***********************/
    incluiPedidoCamisetaBrasil(dados) 
    {
       return new Promise ((resolve,reject) => 
       {
        var erroTabela1 = false;
        var erroTabela2 = false;
        var insertTabela1 = "INSERT INTO PEDIDO (descricao_produto,data_emissao,quantidade,valor_total,status_pedido) VALUES('" +
           " Camiseta do Brasil Masculina " + "','" + dados.data_emissao + "','" + "01" + "','" 
           + " R$250,00 " + "','" + " Realizado " + "')";
        this._db.query(insertTabela1,function(erro) {
          if (erro) { 
            erroTabela1 = true;
            console.log(erro)    
          }
          
        });
        var insertTabela2 = "INSERT INTO PRODUTO(nome_produto,valor_total, data_emissao) VALUES('" +
        " Camiseta do Brasil Masculina " + "','" + " R$250,00 " + dados.data_emissao + "')";
        this._db.query(insertTabela2,function(erro) {
            if (erro) { 
              erroTabela2 = true;
              console.log(erro)    
            }
        });

        if ((erroTabela1) || (erroTabela2))
        return reject('Erro na validação do acesso do usuário');
        else
        resolve('Inclusão do cliente foi executada com sucesso');
       });
    }

    incluiPedidoCamisetaArgentina(dados) 
    {
       return new Promise ((resolve,reject) => 
       {
        var erroTabela1 = false;
        var erroTabela2 = false;
        var insertTabela1 = "INSERT INTO PEDIDO (descricao_produto,data_emissao,quantidade,valor_total,status_pedido) VALUES('" +
           " Camiseta da Argentina Feminina " + "','" + dados.data_emissao + "','" + "01" + "','" 
           + " R$220,00 " + "','" + " Realizado " + "')";
        this._db.query(insertTabela1,function(erro) {
          if (erro) { 
            erroTabela1 = true;
            console.log(erro)    
          }
          
        });
        var insertTabela2 = "INSERT INTO PRODUTO(nome_produto,valor_total, data_emissao) VALUES('" +
        " Camiseta da Argentina Feminina " + "','" + " R$220,00 " + dados.data_emissao + "')";
        this._db.query(insertTabela2,function(erro) {
            if (erro) { 
              erroTabela2 = true;
              console.log(erro)    
            }
        });

        if ((erroTabela1) || (erroTabela2))
        return reject('Erro na validação do acesso do usuário');
        else
        resolve('Inclusão do cliente foi executada com sucesso');
       });
    }


    listagemPedidoPorNumero(numero_pedido) 
    {
      return new Promise ((resolve,reject) => 
      {
        //var sqlConsultaCliePorID = "SELECT * FROM CLIENTES WHERE idClie=" + id;
        //this._db.query(sqlConsultaCliePorID,(erro,resultado) => {
        this._db.query("SELECT * FROM PEDIDO WHERE numero_pedido=?",[numero_pedido],(erro,resultado) => {
          if (erro) {
            console.log(erro);
            return reject('Erro no select * from pedido where numero_pedido=X');
          }
          resolve(resultado);
        });
      });
    }

    atualizaPedido(dados) 
    {
        return new Promise ((resolve,reject) => 
        {
            var sqlAtualiza = "UPDATE PEDIDO SET descricao_Produto='" + dados.descricao_produto + "', data_emissao='" + dados.data_emissao + 
            "', quantidade='" + dados.quantidade + "', valor_total='" + dados.valor_total + "' where numero_pedido=" + 
            dados.numero_pedido;
            this._db.query(sqlAtualiza,function(erro) 
            {
              if (erro) 
              { 
                 console.log(erro)
                 return reject('Alteração do cliente NÃO foi executada com sucesso');
              }
              resolve('Alteração do cliente foi executada com sucesso');
            });
        });
     }

     excluirPedidos(numero_pedido) 
     {
         return new Promise((resolve,reject) => 
         {
             var sqlDelete = "DELETE FROM PEDIDO WHERE numero_pedido= " + numero_pedido;
             this._db.query(sqlDelete,function(erro) {
                 if (erro) {
                    console.log(erro);
                    return reject('Exclusão do pedido NÃO foi executada com sucesso');
                 }
                 resolve('Exclusão do pedido executada com sucesso');
             });
         });
     }
    
    /*Tentando com SQL Injection 
    incluiClientes(dados) 
    {
       return new Promise ((resolve,reject) => 
       {
        var sqlInclui = 'INSERT INTO CLIENTES(nomeClie,cpfClie,idadeClie,emailClie) VALUES(?,?,?,?)';
        this._db.query(sqlInclui,[require.body.nomeClie, require.body.cpfClie, require.body.idadeClie, 
                      require.body.emailClie],function(erro) {
          if (erro) { 
            console.log(erro)
            return reject('Inclusão do cliente NÃO foi executada com sucesso');
          }
          resolve('Inclusão do cliente foi executada com sucesso');
        });
       });
    }
    */


}

module.exports = dao_PEDIDOS;