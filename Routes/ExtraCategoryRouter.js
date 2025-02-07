const express=require('express')

const ExteraRouter=express.Router();

const ExtraCategoryCtl=require('../controllers/ExtraCategoryController')
ExteraRouter.get('/',ExtraCategoryCtl.AddExtraCategory)
ExteraRouter.get('/viewExtraCategory',ExtraCategoryCtl.viewExtraCategory)

ExteraRouter.post('/insertExtraCategory',ExtraCategoryCtl.insertExtraCategory)

ExteraRouter.get('/deleteExtraCategory',ExtraCategoryCtl.deleteExtraCategory)



module.exports=ExteraRouter