const express=require('express')

const subRouter=express.Router();

const subCategoryCtl=require('../controllers/SubCategoryController')
const passport=require('../config/passport-local-stratergy')

subRouter.get('/',passport.checkAuthUser,subCategoryCtl.AddSubCategory)
subRouter.get('/viewSubCategory',passport.checkAuthUser,subCategoryCtl.viewSubCategory)

subRouter.post('/insertSubCategory',subCategoryCtl.insertSubCategory)

subRouter.get('/deleteSubCate',subCategoryCtl.deleteSubCate)



module.exports=subRouter