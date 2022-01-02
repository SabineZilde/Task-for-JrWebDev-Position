const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(
    cors({
        origin: '*',
        credentials: true
    })
);

app.use(express.json());

// const db = mysql.createConnection({
//     user: 'root',
//     host: 'http://sabine-zilde.magebithr.com',
//     password: 'test12345',
//     database: 'emaildb',
// });
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'MyNewPass',
    database: 'emailSystem',
});

app.post('/emails', (req, res) => {
    console.log(req.body)
    const email = req.body.email;

    db.query('INSERT INTO emailstable (email) VALUES (?)',
        [email],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Values inserted');
            }
        }
    );
});

app.listen(3002, () => {
    console.log('Server is up and running on port 3002');
});