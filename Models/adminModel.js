const mongoose=require('mongoose')
const multer = require('multer')

const ImagePath='/uploads/AdminImage'
const path=require('path')

const AdminSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    hobby:{
        type:Array,
        require:true
    },
    cityName:{
        type:String,
        require:true
    },
   
    Status:{
        type:Boolean,
        require:true,
        default:true
    }, Image:{
        type:String,
        require:true
    },
},{timestamps:true})

const StorageImage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'..',ImagePath))
    },
    filename:(req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
    
})

AdminSchema.statics.UploadImage=multer({storage:StorageImage}).single('Image')
AdminSchema.statics.ImgPath=ImagePath

const Admin=mongoose.model('Admin',AdminSchema)

module.exports=Admin;