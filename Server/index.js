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
                res.send(result);
            }
        }
    );
});

app.get('/emails', (req, res) => {
    db.query('SELECT * FROM emailstable ORDER BY created', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    db.query('DELETE FROM emailstable WHERE ID = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3002, () => {
    console.log('Server is up and running on port 3002');
});