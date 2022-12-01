class dao_CLIENTES {
    // construtor da classe
    // objetiva é criar a conexão com o BD
    constructor(db) {
        // _db = atributo da classe dao_CLIENTES
        // db = parâmetro do construtor
        this._db = db;
    }

    dadosDosClientesEJS(){
        return new Promise((resolve,reject) => { 
            var sql = 'SELECT idClie, cpfClie, emailClie, nomeClie, idadeClie FROM CLIENTES ORDER BY idClie';
            this._db.query(sql, [],function(erro,listagem) {
            if (erro) {
                console.log(erro);
                return reject('Lista de CLIENTES FALHOU!'); 
            }
            resolve(listagem);
            });
        });
    }

    
    // Insert na tabela Cliente e na tabela Acesso 
    incluiClientes(dados) 
    {
       return new Promise ((resolve,reject) => 
       {
        var erroTabela1 = false;
        var erroTabela2 = false;
        var insertTabela1 = "INSERT INTO CLIENTES (nomeClie,cpfClie,idadeClie,emailClie) VALUES('" +
           dados.nomeClie + "','" + dados.cpfClie + "','" + dados.idadeClie + "','" 
           + dados.emailClie + "')";
        this._db.query(insertTabela1,function(erro) {
          if (erro) { 
            erroTabela1 = true;
            console.log(erro)    
          }
          
        });
        var insertTabela2 = "INSERT INTO ACESSO(emailUSR,senhaUSR) VALUES('" +
        dados.emailClie + "','" + dados.senhaClie + "')";
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

    excluirClientes(id) 
    {
        return new Promise((resolve,reject) => 
        {
            var sqlDelete = "DELETE FROM CLIENTES WHERE idClie=" + id;
            this._db.query(sqlDelete,function(erro) {
                if (erro) {
                   console.log(erro);
                   return reject('Exclusão do cliente NÃO foi executada com sucesso');
                }
                resolve('Exclusão do cliente executada com sucesso');
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


    /* Insert apenas para a tabela cliente:
    incluiClientes(dados) 
    {
       return new Promise ((resolve,reject) => 
       {
        var sqlInclui = "INSERT INTO CLIENTES (nomeClie,cpfClie,idadeClie,emailClie) VALUES('" +
           dados.nomeClie + "','" + dados.cpfClie + "','" + dados.idadeClie + "','" 
           + dados.emailClie + "')";
        this._db.query(sqlInclui,function(erro) {
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

module.exports = dao_CLIENTES;