var mongoose = require('mongoose');
const user = require('./product');
//var dev_db_url = "mongodb://localhost:27017/oscardb";
var dev_db_url = "mongodb+srv://oscardb:Utec2021.@cluster0.az89w.mongodb.net/oscardb?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

var Product = require('./product');

/*
    Crud Operations
*/

// create
exports.product_create = (req, res) => {
    let product = new Product({
        _id: req.body.code,
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    });

    product.save((err) => {
        if(err){
            res.send({'error': err.message});
        }
        else{
            res.send({'message': 'Product created!'});
        }
    });
}
// read
exports.product_read = (req, res) => {
    if(req.query.code){
        Product.findById(req.query.code, (err, product) => {
            if(err){
                res.send({'error': err.message});
            }
            else{
                res.send(product);
            }
        });
    }
    else{
        Product.find({}, (err, product) => {
            if(err){
                res.send({'error': err.message});
            }
            else{
                res.send(product);
            }
        });
    }
}
// update
exports.product_update = (req, res) => {
    Product.findByIdAndUpdate(req.body.code, { $set: req.body } ,(err, user) => {
        if(err){
            res.send({'error': err.message});
        }
        else{
            res.send({'message': 'product info updated'});
        }
    });
}
// delete
exports.product_delete = (req, res) => {
    Product.findByIdAndRemove(req.query.code, (err, user) => {
        if(err){
            res.send({'error': err.message});
        }
        else{
            res.send({'message': 'product deleted'});
        }
    });
}