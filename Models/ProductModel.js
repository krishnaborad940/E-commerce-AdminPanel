const mongoose=require('mongoose')
const  path=require('path')

const multer=require('multer')

const ImagePath='/uploads/ProductImage'

const ProductsSchema=mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        require:true
    },
    SubCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubCategory',
        require:true
},
ExtraCategoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'ExtraCategory',
    require:true
},
TypesCategoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Types',
    require:true
},
BrandCategoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Brand',
    require:true
},
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
oldPrice:{
    type:String,
    required:true
},
price:{ 
    type:String,
    required:true
},
Image:{
    type:String,
    required:true
},
    Status:{
        type:Boolean,
        require:true,
        default:true
    }
},{timestamps:true})


let storageImage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'..',ImagePath))
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
})

ProductsSchema.statics.uploadImage=multer({storage:storageImage}).single("Image")
ProductsSchema.statics.ImgPath=ImagePath

const Product=mongoose.model('Product',ProductsSchema)

module.exports=Product;