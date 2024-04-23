const express = require('express');
// const mysql = require('mysql');

const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodejs-docker'
};

// const connection = mysql.createConnection(config);

// const insertScript = `INSERT INTO people (name) VALUES ('Jonas');`

// connection.query(insertScript);

let names = "<li>Teste</li>";
// const selectScript = `SELECT * FROM people;`

// connection.query(selectScript,
//     [nameLandVariable], 
//     function(err, rows) {
//         names = rows.Map(r => `<li>${r.name}</li>`)
//     }
// );

// connection.end();

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle Rocks!</h1>
        <ul>
            ${names}
        </ul>
    `)
});

app.listen(port, () => {
    console.log("Running on port: " + port)
});