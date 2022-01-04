const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'MyNewPass',
    database: 'emailSystem',
});

module.exports = db;