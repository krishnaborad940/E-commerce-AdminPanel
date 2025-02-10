const express=require('express')

const routes=express.Router();

const productCtl=require('../controllers/ProductController');
const Product = require('../Models/ProductModel');

routes.get('/',productCtl.AddProduct)

routes.post('/insertProducts',Product.uploadImage,productCtl.insertProducts)

routes.get('/ViewProduct',productCtl.ViewProduct)

routes.get('/deleteProduct',productCtl.deleteProduct)

routes.get('/UpdateProduct',productCtl.UpdateProduct)




console.log("connected")

module.exports=routes