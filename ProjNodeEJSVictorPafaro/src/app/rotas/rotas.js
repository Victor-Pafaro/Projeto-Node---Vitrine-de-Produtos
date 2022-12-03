const req = require('express/lib/request');
const res = require('express/lib/response');

const UsuariosController = require('../controller/usuarios_controller');
const usuarioControlador = new UsuariosController();

const ClientesController = require('../controller/clientes_controller');
const clienteControlador = new ClientesController();

const ProdutosController = require('../controller/produtos_controller');
const produtoControlador = new ProdutosController();

const PedidosController = require('../controller/pedidos_controller');
const pedidoControlador = new PedidosController();

module.exports = (app) => 
{

// Evitar problema com o CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// trabalhando com variaveis de sessao
var sessao; 


/********************************* ROTAS ****************************/


// Rota para exibir pagina de login 
app.get('/', usuarioControlador.exibeFormAcesso(sessao))

// Rota que faz a validação do usuario
app.post('/validaBDUsuarios',usuarioControlador.exibeResultadoValidacaoAcesso());

/* Rota para página de cadastro de usuario */
app.get('/add', function(req,res){
  res.render('../views/ejs/form-cadastro');
})

/* Rota para receber os dados de cadastro de cliente e usuario*/
app.post('/add', clienteControlador.incluirClientes())

// Rota para listagem de clientes
app.get('/listaClientes', clienteControlador.exibeDadosClienteEJS(sessao))

/* Rota para o menu principal */
app.get('/menu', function(req,res){
  res.render('../views/ejs/menu-principal')
});

/* Rota para pagina quem eu sou */
app.get('/quemsou', function(req,res){
  res.render('../views/ejs/pagina-quemsou')
});

/* Rota para vitrine de produtos */
app.get('/vitrine', function(req,res){
  res.render('../views/ejs/vitrine-produtos');
});

/* Rota para formulario de compra da camisa do Brasil */
app.get('/compraProdutoCamisaBrasil', produtoControlador.exibeDadosProdutoCamisaBrasil());

/* Rota para formulario de compra da camisa da Inglaterra */
app.get('/compraProdutoCamisaInglaterra', produtoControlador.exibeDadosProdutoCamisaInglaterra());

/* Rota para formulario de compra da camisa da França */
app.get('/compraProdutoCamisaFranca', produtoControlador.exibeDadosProdutoCamisaFranca());

/* Rota para formulario de compra da camisa da Argentina */
app.get('/compraProdutoCamisaArgentina', produtoControlador.exibeDadosProdutoCamisaArgentina());

/* Rota para incluir pedido da camisa do Brasil */
app.post('/cadastrapedidobrasil', pedidoControlador.incluirPedidosCamisetaBrasil());

/* Rota para incluir pedido da camisa da Inglaterra */
app.post('/cadastrapedidoinglaterra', pedidoControlador.incluirPedidosCamisetaInglaterra());

/* Rota para incluir pedido da camisa da França */
app.post('/cadastrapedidofranca', pedidoControlador.incluirPedidosCamisetaFranca());

/* Rota para incluir pedido da camisa do Japão */
app.post('/cadastrapedidoargentina', pedidoControlador.incluirPedidosCamisetaArgentina());


/* Rota para pagina de pedido realizado */
app.get('/pedidorealizado', function(req,res){
  res.render('../views/ejs/pedido-realizado');
});

/* Rota para listagem de pedidos */
app.get('/listaPedidos', pedidoControlador.exibeDadosPedido());


/* Rota para buscar o pedido para edição */
// app.get('/pedidos/consultaPorNumero/:numero_pedido',pedidoControlador.consultarPorNumeroPedido());

/* Rota para receber os dados do form de edição de pedido */
// app.post('/pedidos/consultaPorNumero/:numero_pedido', pedidoControlador.atualizarPedido());

/* Rota para deletar um pedido */
app.get('/pedidos/deletar/:numero_pedido',pedidoControlador.deletarPedidos());

};  // end principal