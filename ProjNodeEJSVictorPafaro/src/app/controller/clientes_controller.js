const dao_CLIENTES = require('../BD/dao_CLIENTES');

// instancia da CONEXÃO com o BD
var db = require('../../config/database');

class ClientesController 
{
    exibeDadosClienteEJS()
    {
        return function (req, res) {
        const clienteDAO = new dao_CLIENTES(db);
        clienteDAO.dadosDosClientesEJS() 
        .then(resultado => {
            console.log(resultado);
            res.render('../views/ejs/listaClientes', { clientes: resultado });
        })
        .catch(erro =>console.log(erro));
        }
    }

    incluirClientes() 
    {
      return function(req,res) {
        const dadosDoForm = req.body;
        const clienteDAO = new dao_CLIENTES(db);
        clienteDAO.incluiClientes(dadosDoForm)
          .then((mensagem) => {  
             console.log(mensagem);
             res.redirect('/menu');
          })
          .catch((mensagem) => {  
             console.log(mensagem);
             res.send(mensagem);
          });
      }
    }

    

    deletarClientes() 
    {
       return function(req,res) {
         const idDoCliente = req.params.idClie;
         const clienteDAO = new dao_CLIENTES(db);
         clienteDAO.excluirClientes(idDoCliente)
            .then((mensagem) => {  
              console.log(mensagem);
              res.redirect('/listaClientes');
             })
            .catch((mensagem) => {  
             console.log(mensagem);
             res.send(mensagem);
            });
       }
    }
}

module.exports = ClientesController;