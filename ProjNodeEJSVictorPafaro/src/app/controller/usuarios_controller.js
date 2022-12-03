const dao_USUARIOS = require('../BD/dao_USUARIOS');

// instancia da CONEXÃO com o BD
var db = require('../../config/database');

class UsuariosController 
{

    // somente para abrir a página de acesso
    exibeFormAcesso(sessao) {
        return function (req, res) {
        sessao = req.session;
        sessao.login = req.body.login;
          if (sessao.login == null) {
            res.render('../views/ejs/index')
          }
        } 
    }
        
    exibeResultadoValidacaoAcesso(sessao)
    {
       return function(req,res) {
          var login_form = req.body.login;
          var senha_form = req.body.senha;
          const usuarioDAO = new dao_USUARIOS(db);
          usuarioDAO.validaAcesso(login_form,senha_form)
          .then((dados) => {  
            console.log(dados);
            // criando minhas variáves de sessao
            if (dados.length)
              {
                sessao = req.session;
                sessao.login = login_form;
                sessao.senha = senha_form;
                console.log("variavel sessao LOGIN = " + sessao.login);
                console.log("variavel sessao SENHA = " + sessao.senha);
                res.redirect('/menu');
              }
            else res.send('Dados incorretos! Tente novamente fazer o ACESSO!!!!');})
          .catch((mensagem) => {  
            console.log(mensagem);
            res.send(mensagem);
          });
       }
    }
  }

module.exports = UsuariosController;

