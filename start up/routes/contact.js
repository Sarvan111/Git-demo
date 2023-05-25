const express =require('express');
const router=express.Router();
const productsController = require('../controllers/products');

router.get('/contactus',productsController.getContact);

router.post('/success',productsController.postContact);
module.exports=router;