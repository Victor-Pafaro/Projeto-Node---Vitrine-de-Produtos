const mysql = require('mysql2');

const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '94390361vV.',
        database : 'VITRINE_PRODUTOS'
        //host     : 'localhost',
        //user     : 'root',
        //password : '',
        //database : 'marcia'
});

connection.connect(function(err) {
    if (err) throw err;
      console.log('CONEXÃO com BD OK!');
});

module.exports = connection;
