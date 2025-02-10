const express=require('express')

const port=8004;
const app=express()

const db=require('./config/db')
const path=require('path')

const passport=require('passport')
const LocalStratergy=require('./config/passport-local-stratergy')
const session=require('express-session')


app.use(express.urlencoded())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const cookieparser=require('cookie-parser')
app.use(cookieparser())
app.use(express.static(path.join(__dirname,'assets')))
app.use('/uploads/AdminImage',express.static(path.join(__dirname,'uploads/AdminImage')))

app.use('/uploads/ProductImage',express.static(path.join(__dirname,'uploads/ProductImage')))


app.use(session({
    name:'krishna',
    secret:"test",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(passport.setAuthUser)

app.use('/',require('./Routes/AdminRoute'))

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false
    }
    console.log("server is connected:-"+port);
})