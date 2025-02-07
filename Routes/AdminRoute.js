const express=require('express')

const router=express.Router()
const adminCtl=require('../controllers/AdminController')
const Admin=require('../Models/adminModel');
const passport = require('../config/passport-local-stratergy');

router.get('/dashbord', passport.checkAuthUser,adminCtl.dashbord);

router.get('/form', passport.checkAuthUser,adminCtl.form)

router.post('/insertAdmin', Admin.UploadImage, adminCtl.insertAdmin)

router.get('/viewAdmin', passport.checkAuthUser,adminCtl.viewAdmin)

router.get('/deleteadmin/:id',adminCtl.deleteadmin)
router.get('/updateAdmin',adminCtl.updateAdmin)

router.post('/EditAdmin',Admin.UploadImage,adminCtl.EditAdmin)

router.get('/MyProfile', passport.checkAuthUser,adminCtl.MyProfile)

router.get('/',adminCtl.Login)

router.post('/loginAdmin',passport.authenticate('local',{failureRedirect:'/dashbord'}),adminCtl.loginAdmin)

router.get('/changePassword',passport.checkAuthUser,adminCtl.changePassword)

router.post('/changePass',adminCtl.changePass)

router.get("/signOut",adminCtl.signOut)

router.get("/ForgotPass",adminCtl.ForgotPass)
router.post("/forgotPassword",adminCtl.forgotPassword)

router.get("/checkEmail",adminCtl.checkEmail)
router.post("/checkEmails",adminCtl.checkEmails)


router.get("/checkOtp",adminCtl.checkOtp)


router.post("/verifyOtp",adminCtl.verifyOtp)


router.get("/ActiveStatus",adminCtl.ActiveStatus)

router.get("/DeActiveStatus",adminCtl.DeActiveStatus)



router.use('/category',require('../Routes/categoryRouter'))

router.use('/SubCategory',require('../Routes/subCategoryRouter'))

router.use('/ExtraCategory',require('../Routes/ExtraCategoryRouter'))

router.use('/Types',require('../Routes/TypesRoutes'))
router.use('/Brand',require('../Routes/BrandRoutes'))



module.exports=router;