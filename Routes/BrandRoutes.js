const express=require('express')

const BrandRouter=express.Router();

const BrandCtl=require('../controllers/BrandController')
BrandRouter.get('/',BrandCtl.AddTypes)

BrandRouter.post('/insertBrand',BrandCtl.insertBrand)
BrandRouter.get('/ViewBrand',BrandCtl.ViewBrand)

BrandRouter.get('/deleteBrandData',BrandCtl.deleteBrandData)

module.exports=BrandRouter