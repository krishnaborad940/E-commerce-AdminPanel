const express=require('express')

const subRouter=express.Router();

const subCategoryCtl=require('../controllers/SubCategoryController')
subRouter.get('/',subCategoryCtl.AddSubCategory)
subRouter.get('/viewSubCategory',subCategoryCtl.viewSubCategory)

subRouter.post('/insertSubCategory',subCategoryCtl.insertSubCategory)

subRouter.get('/deleteSubCate',subCategoryCtl.deleteSubCate)



module.exports=subRouter