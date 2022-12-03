const mysql = require('mysql2');

/* Conectar ao servidor localhost
const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'VITRINE_PRODUTOS'
});

*/

// Conectar ao servidor regulus
const connection = mysql.createConnection({
        host     : 'regulus.cotuca.unicamp.br',
        user     : 'BD21119',
        password : 'BD21119',
        database : 'BD21119'
});


connection.connect(function(err) {
    if (err) throw err;
      console.log('CONEXÃO com BD OK!');
});

module.exports = connection;
