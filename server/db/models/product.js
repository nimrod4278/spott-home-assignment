const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id: String,
    productName: String,
    cogs: {
        unitManufacturingCost: Number,
        shipmentUnitCost: Number,
        monthlyAdvertismentCost: Number,
        manufacturingCountry: String
    }
});

const ProductsModel = mongoose.model('products', ProductSchema);

module.exports = ProductsModel;