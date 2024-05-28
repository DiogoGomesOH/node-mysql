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
    name: "Bosta",
    description: "Bosta Nova"
}

connection.query('UPDATE `todos` SET `name`=?,`description`=? where `id`=?',
[params.name, params.description, 3],
function (error, results, fields) {
    if (error) throw error;
    console.log("Record updated!");
});