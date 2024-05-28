const mysql = require('mysql');
// connection configurations
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

// connect to database
connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
});

let params = {
    name: "Teste",
    description: "Novo Teste"
}

connection.query("INSERT INTO todos SET ? ", params,
    function (error, results, fields) {
        if (error) throw error;
        console.log("Record inserted");
    });