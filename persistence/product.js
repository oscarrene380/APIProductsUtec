var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const productsSchema = new Schema({
    _id: {type: String, required: true},
    code: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
});

module.exports = mongoose.model('Products', productsSchema);