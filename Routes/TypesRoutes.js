const express=require('express')

const TypesRouter=express.Router();

const TypesCtl=require('../controllers/TypesController')
const passport=require('../config/passport-local-stratergy')
TypesRouter.get('/',passport.checkAuthUser,TypesCtl.AddTypes)

TypesRouter.post('/insertTypesCategory',TypesCtl.insertTypesCategory)
TypesRouter.get('/ViewTypes',passport.checkAuthUser,TypesCtl.ViewTypes)

TypesRouter.get('/deleteTypeCategory',TypesCtl.deleteTypeCategory)









module.exports=TypesRouter