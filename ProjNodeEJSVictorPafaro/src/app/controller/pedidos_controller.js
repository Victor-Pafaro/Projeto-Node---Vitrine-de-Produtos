const dao_PEDIDOS = require('../BD/dao_PEDIDOS');

// instancia da CONEXÃO com o BD
var db = require('../../config/database');

class PedidosController
{
    exibeDadosPedido()
    {
        return function (req, res) {
        const pedidoDAO = new dao_PEDIDOS(db);
        pedidoDAO.dadosDosPedidos() 
        .then(resultado => {
            console.log(resultado);
            res.render('../views/ejs/listaPedidos', { pedidos: resultado });
        })
        .catch(erro =>console.log(erro));
        }
    }

    /**************************** Teste **************************/
    incluirPedidosCamisetaBrasil() 
    {
      return function(req,res) {
        const dadosDoForm = req.body;
        const pedidoDAO = new dao_PEDIDOS(db);
        pedidoDAO.incluiPedidoCamisetaBrasil(dadosDoForm)
          .then((mensagem) => {  
             console.log(mensagem);
             res.redirect('/pedidorealizado');
          })
          .catch((mensagem) => {  
             console.log(mensagem);
             res.send(mensagem);
          });
      }
    }

    incluirPedidosCamisetaArgentina() 
    {
      return function(req,res) {
        const dadosDoForm = req.body;
        const pedidoDAO = new dao_PEDIDOS(db);
        pedidoDAO.incluiPedidoCamisetaArgentina(dadosDoForm)
          .then((mensagem) => {  
             console.log(mensagem);
             res.redirect('/pedidorealizado');
          })
          .catch((mensagem) => {  
             console.log(mensagem);
             res.send(mensagem);
          });
      }
    }

    /* Funciona
    incluirPedidos() 
    {
      return function(req,res) {
        const dadosDoForm = req.body;
        const pedidoDAO = new dao_PEDIDOS(db);
        pedidoDAO.incluiPedido(dadosDoForm)
          .then((mensagem) => {  
             console.log(mensagem);
             res.redirect('/pedidorealizado');
          })
          .catch((mensagem) => {  
             console.log(mensagem);
             res.send(mensagem);
          });
      }
    }
    */

    consultarPorNumeroPedido() 
    {
     return function(req,res) {
       const numeroDoPedido = req.params.numero_pedido;
       const pedidoDAO = new dao_PEDIDOS(db);
       pedidoDAO.listagemPedidoPorNumero(numeroDoPedido)
       .then((resultado) => {  
         res.render('../views/ejs/form-compra-produto-camisa-brasil',{ produtos: resultado[0] });     
       })
        .catch((mensagem) => {  
         console.log(mensagem);
         res.send(mensagem);
        }); 
      }
    }

    atualizarPedido() 
    {
      return function(req,res) {
        const dadosDoForm = req.body;
        const pedidoDAO = new dao_PEDIDOS(db);
        pedidoDAO.atualizaPedido(dadosDoForm)
        .then((mensagem) => {  
          console.log(mensagem);
          res.redirect('/listaPedidos');
        })
        .catch((mensagem) => {  
          console.log(mensagem);
          res.send(mensagem);
        });
      }
    }

    deletarPedidos() 
    {
       return function(req,res) {
         const numeroDoPedido = req.params.numero_pedido;
         const pedidoDAO = new dao_PEDIDOS(db);
         pedidoDAO.excluirPedidos(numeroDoPedido)
            .then((mensagem) => {  
              console.log(mensagem);
              res.redirect('/listaPedidos');
             })
            .catch((mensagem) => {  
              console.log(mensagem);
              res.send(mensagem);
            });
       }
    }
}

module.exports = PedidosController;