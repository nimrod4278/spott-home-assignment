const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoutrySchema = new Schema({
    name: String,
    code: String
});

const CountriesModel = mongoose.model('countries', CoutrySchema);

module.exports = CountriesModel;