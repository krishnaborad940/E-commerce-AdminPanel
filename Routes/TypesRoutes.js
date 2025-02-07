const express=require('express')

const TypesRouter=express.Router();

const TypesCtl=require('../controllers/TypesController')
TypesRouter.get('/',TypesCtl.AddTypes)

TypesRouter.post('/insertTypesCategory',TypesCtl.insertTypesCategory)
TypesRouter.get('/ViewTypes',TypesCtl.ViewTypes)

TypesRouter.get('/deleteTypeCategory',TypesCtl.deleteTypeCategory)









module.exports=TypesRouter