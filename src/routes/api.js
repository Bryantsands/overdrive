const express = require('express');
const db = require('./models/Product');
const router = express.Router();

router.get('/', function(req, res){
  db.product.findAll({
  }).then(function(result){
    var productObj = {
      products: result
    };
    console.log(productObj);
    res.render('index', productObj);
  });
});

router.post('/', function(req, res){
  bd.product.create({
    product_name: req.body.product_name,
  }).then(function(dbProduct){
    console.log(dbProduct);
    res.redirect('/');
  });catch(function(error){
    thrw error;
  });
});

router.put('/:id', )
