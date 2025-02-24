const express=require('express')

const routes=express.Router();

const userCtl=require('../controllers/userController')
routes.get('/',userCtl.home);

console.log("connected")

module.exports=routes