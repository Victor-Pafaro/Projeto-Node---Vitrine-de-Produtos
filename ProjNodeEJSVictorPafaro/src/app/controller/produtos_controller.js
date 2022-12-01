const dao_PRODUTOS = require('../BD/dao_PRODUTOS');

// instancia da CONEXÃO com o BD
var db = require('../../config/database');

class ProdutosController
{
    exibeDadosProdutoCamisaBrasil()
    {
        return function (req, res) {
        const produtoDAO = new dao_PRODUTOS(db);
        produtoDAO.dadosDoProdutoCamisaBrasil() 
        .then(resultado => {
            console.log(resultado);
            res.render('../views/ejs/form-compra-produto-camisa-brasil', { produtos: resultado });
        })
        .catch(erro =>console.log(erro));
        }
    }

    exibeDadosProdutoCamisaArgentina()
    {
        return function (req, res) {
        const produtoDAO = new dao_PRODUTOS(db);
        produtoDAO.dadosDoProdutoCamisaBrasil() 
        .then(resultado => {
            console.log(resultado);
            res.render('../views/ejs/form-compra-produto-camisa-argentina', { produtos: resultado });
        })
        .catch(erro =>console.log(erro));
        }
    }
}

module.exports = ProdutosController;