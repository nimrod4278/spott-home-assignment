const express = require('express');
const router = express.Router();

const VerifyProductDetails = require('../services/verifyProductDetails');

const ProductsModel = require('../db/models/product');
const CountriesModel = require('../db/models/coutry');

router.get('/countries', (req, res) => {
    CountriesModel.find({}, (err, coutries) => {
        if (err) {
            res.status(500).send({
                error: err,
                msg: "Internal DB Error",
            });
        } else {
            res.status(200).send(coutries);
        }
    });
});

router.get('/products', (req, res) => {
    ProductsModel.find({}, (err, products) => {
        if (err) {
            res.status(500).send({
                error: err,
                msg: "Internal DB Error",
            });
        } else {
            res.status(200).send(products);
        }
    });
});

router.post('/cogs', (req, res) => {
    let {data} = req.body;
    ProductsModel.findOneAndUpdate({
        _id: data._id
    }, data, {
        new: true
    }, (err, result) => {
        if (err) {
            res.status(500).send({
                error: err,
                msg: "Internal DB Error",
            })
        } else {
            res.status(201).send({
                msg: "SUCCESS"
            })
        }
    })
});

module.exports = router;