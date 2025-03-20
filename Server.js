const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'mysql',
    user: 'root',
    password: 'password',
    database: 'ecommerce_db'});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        }
    else {
        console.log('Connected to Mysql');
    }
});

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) =>{
        if (err) throw err;
        res.json(result);
    });
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
