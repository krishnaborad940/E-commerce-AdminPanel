const passport=require('passport')

const LocalStratergy=require('passport-local')
const Admin = require('../Models/adminModel')

passport.use(new LocalStratergy({
    usernameField:"email"
},async function(email,password,done){
    let adminData=await Admin.findOne({email:email})
    if(adminData){
        if(adminData.password==password){
            return done(null,adminData)
        }else{
            return done(null,false)
        }
    }else{
        return done(null,false)
    }
}))

passport.serializeUser(async function(user,done){
    return done(null,user.id)
})
passport.deserializeUser(async function(id,done){
    let adminRecord=await Admin.findById(id)
    if(adminRecord){
        return done(null,adminRecord)
    }
    else{
        return done(null,false)
    }
})

passport.setAuthUser=function(req,res,next){
if(req.isAuthenticated()){
    res.locals.user=req.user
}
next()
}

passport.checkAuthUser=function(req,res,next){
    if(req.isAuthenticated()){
        next()
    }
    else{
        return res.redirect('/Login')
    }
}

module.exports=passport