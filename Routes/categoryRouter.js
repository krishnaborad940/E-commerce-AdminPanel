const express=require('express')

const Routers=express.Router();

const CategoryCtl=require('../controllers/CategoryController');
const passport = require('../config/passport-local-stratergy');

Routers.get('/',passport.checkAuthUser,CategoryCtl.AddCategory)

Routers.post('/insertCategory',CategoryCtl.insertCategory)

Routers.get('/ViewCategory',passport.checkAuthUser,CategoryCtl.ViewCategory)

Routers.get("/ActiveStatus",CategoryCtl.ActiveStatus)

Routers.get("/DeActiveStatus",CategoryCtl.DeActiveStatus)

Routers.get('/deletecate',CategoryCtl.deletecate)




module.exports=Routers


// <!-- AddCategory -->