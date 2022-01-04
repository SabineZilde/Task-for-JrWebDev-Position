const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'MyNewPass',
    database: 'pineappledb',
});

module.exports = db;