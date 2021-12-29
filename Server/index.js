const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'sabine-zilde.magebithr.com',
    password: 'BdCYihKIojDHwvd',
    database: 'databaseName',
});

app.post('/create', (req, res) => {
    const email = req.body.email;

    db.query('INSERT INTO tablename (email) VALUES (?)',
        [email],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Values inserted')
            }
        }
    );
});

app.listen(3002, () => {
    console.log('Server is up and running on port 3002');
});