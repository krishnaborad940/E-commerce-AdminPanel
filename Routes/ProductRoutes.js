const express=require('express')

const routes=express.Router();

const productCtl=require('../controllers/ProductController');
const Product = require('../Models/ProductModel');
const passport=require('../config/passport-local-stratergy')

routes.get('/',passport.checkAuthUser,productCtl.AddProduct)

routes.post('/insertProducts',Product.uploadImage,productCtl.insertProducts)

routes.get('/ViewProduct',passport.checkAuthUser,productCtl.ViewProduct)

routes.get('/deleteProduct',productCtl.deleteProduct)

routes.get('/UpdateProduct/:id',passport.checkAuthUser,productCtl.UpdateProduct)

routes.post('/Editroducts',Product.uploadImage,productCtl.Editroducts)




console.log("connected")

module.exports=routes