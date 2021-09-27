const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use(cors());

const db_manager = require('./persistence/dbmanager');

// CRUD

// create user
app.post('/product', (req, res) => {
    db_manager.product_create(req, res);
});
// read user
app.get('/product', (req, res) => {
    db_manager.product_read(req, res);
});
// update user
app.put('/product', (req, res) => {
    db_manager.product_update(req, res);
});
// delete user
app.delete('/product', (req, res) => {
    db_manager.product_delete(req, res);
});


// starting server
app.listen(4000, () => {
    console.log('API RES running on port: 4000');
});