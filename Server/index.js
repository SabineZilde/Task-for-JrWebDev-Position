const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./config/db.js");

app.use(
    cors({
        origin: '*',
        credentials: true
    })
);

const PORT = 3002;

app.use(express.json());

app.post('/emails', (req, res) => {
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

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});