const express=require('express')

const ExteraRouter=express.Router();

const ExtraCategoryCtl=require('../controllers/ExtraCategoryController')
const passport=require('../config/passport-local-stratergy')

ExteraRouter.get('/',passport.checkAuthUser,ExtraCategoryCtl.AddExtraCategory)
ExteraRouter.get('/viewExtraCategory',passport.checkAuthUser,ExtraCategoryCtl.viewExtraCategory)

ExteraRouter.post('/insertExtraCategory',ExtraCategoryCtl.insertExtraCategory)

ExteraRouter.get('/deleteExtraCategory',ExtraCategoryCtl.deleteExtraCategory)



module.exports=ExteraRouter