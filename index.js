const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use(cors());

const db_manager = require('./persistence/dbmanager');

// Settings 
app.set('port', process.env.PORT || 4000);

/*
    CRUD
*/
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
app.listen(app.get('port'), () => {
    console.log('API running on port: '+app.get('port'));
});

// HOME
app.get('/', (req, res) => {
    res.send('Welcome, this is the API yo manage your products information');
});

// if the route doesn't exist it's gonna be redirect to 404 page
app.use((req, res)=>{
    res.status(404).send({'error': 'Page not found'});
});