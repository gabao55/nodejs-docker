const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodejs-docker'
};

const connection = mysql.createConnection(config);

connection.query(`CREATE TABLE IF NOT EXISTS people(
    name varchar(255) not null
)`);

const sql = `INSERT INTO people (name) values ('GABRIEL');`

connection.query(sql);

const selectScript = `SELECT * FROM people;`

let names;

connection.query(selectScript,  async function (err, rows, fields) {
    names = await rows.map(r => `<li>${r.name}</li>`)
});

app.get('/', async (req, res) => {
    res.send(`<h1>Full Cycle Rocks!</h1>
        <ul>
            ${names.join("\n")}
        </ul>
    `)
});

app.listen(port, () => {
    console.log("Running on port: " + port)
});