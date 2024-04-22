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

const insertScript = `INSERT INTO people (name) VALUES ('Jonas');`

connection.query(insertScript);

app.get('/', (req, res) => {
    const selectScript = `SELECT * FROM people;`
    
    connection.query(selectScript,
        [nameLandVariable], 
        function(err, rows) {
            const peopleList = rows.Map(r => `<li>${r.name}</li>`)
            res.send(`<h1>Full Cycle Rocks!</h1>
                <ul>
                    ${peopleList}
                </ul>
            `)
        }
    );
});

app.listen(port, () => {
    console.log("Running on port: " + port)
});