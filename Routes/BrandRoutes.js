const express=require('express')

const BrandRouter=express.Router();

const BrandCtl=require('../controllers/BrandController')
const passport=require('../config/passport-local-stratergy')
BrandRouter.get('/',passport.checkAuthUser,BrandCtl.AddTypes)

BrandRouter.post('/insertBrand',BrandCtl.insertBrand)
BrandRouter.get('/ViewBrand',passport.checkAuthUser,BrandCtl.ViewBrand)

BrandRouter.get('/deleteBrandData',BrandCtl.deleteBrandData)

module.exports=BrandRouter