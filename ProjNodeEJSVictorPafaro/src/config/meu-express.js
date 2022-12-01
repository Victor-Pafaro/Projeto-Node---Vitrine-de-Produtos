const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const expressLayouts = require('express-ejs-layouts'); 
app.set('view engine','ejs');
app.set('views', "./views");
app.use(expressLayouts);

/* sempre que usar um CSS ou arquivo JPG no browser será necessário criar um apelido para 
o caminho físico */

//app.use('/caminhoArquivos',express.static('Z:/ProjNodeEJSIsabela/views/ejs/'));

//app.use('/public',express.static(__dirname+'/../../views/ejs/login'));

app.use(express.static(path.join(__dirname, '../../public')));



// delegar o controle do middleware para o body-parser
app.use(bodyParser.urlencoded({
    // habilitar o body-Parser a receber dados em formato JSON
    extended: true
  }));

// configuração padrão de session na aplicação nodejs
app.use(session(
  {
    secret: 'odesempre',
    saveUninitialized: true,
    resave: true
  })
);

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;

