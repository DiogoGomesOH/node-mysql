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

// Retrieve and return all todos from the database.

connection.query('select * from todos',
    function (error, results, fields) {
        if (error) throw error;
        console.log(JSON.stringify(results));
    });