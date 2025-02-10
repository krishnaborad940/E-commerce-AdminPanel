const Brand = require("../Models/BrandModel")
const Category = require("../Models/CategoryModel")
const ExtraCategory = require("../Models/ExtraCategoryModel")
const SubCategory = require("../Models/subCategoryModel")
const Types = require("../Models/TypesModel")
const Product=require('../Models/ProductModel')
const path=require('path')
const fs=require('fs')

module.exports.AddProduct=async(req,res)=>{
    try{

        let categoryData=await Category.find()
        let SubCategoryData=await SubCategory.find()
        let ExtraCategoryData=await ExtraCategory.find()
        let TypeCategoryData=await Types.find()
        let BrandData=await Brand.find()


return res.render('Products/AddProduct',{categoryData,SubCategoryData,ExtraCategoryData,TypeCategoryData,BrandData})
    }catch(err){
        console.log("somthing went wrong")
        return res.redirect('back')
    }
}

module.exports.insertProducts=async(req,res)=>{
    try{
        // console.log(req.body)
        // console.log(req.file)
        let newImg='';
        if(req.file){
            newImg=await Product.ImgPath+"/"+req.file.filename
        }
        req.body.Image=newImg

        let AddProduct=await Product.create(req.body)
        if(AddProduct){
            console.log("Data Added Successfully")
            return res.redirect('back')
        }else{
            console.log("Data  Not Added ")
            return res.redirect('back')
        }
        
    }catch(err){
        console.log("somthing went wrong")
        return res.redirect('back')
    }
}

module.exports.ViewProduct=async(req,res)=>{

    let viewProductData=await Product.find().populate('categoryId').
        populate('SubCategoryId').populate('ExtraCategoryId').populate('TypesCategoryId').populate('BrandCategoryId').exec();

    return res.render("Products/ViewProduct",{viewProductData})
}

module.exports.deleteProduct=async(req,res)=>{
    try{
        // console.log(req.query.delId)
        let findId=await Product.findById(req.query.delId)
        if(findId){
            try{

                var imagePath=path.join(__dirname,'..',findId.Image)
                await fs.unlinkSync(imagePath)
            }catch(err){
                console.log("Image Not Found")
                return res.redirect('back')
            }
            let deleteData=await Product.findByIdAndDelete(req.query.delId)
            if(deleteData){
                console.log("data deleted succesfully")
                return res.redirect('back')
            }else{
                console.log("data Not Deleted ")
                return res.redirect('back')
            }

        }else{
            console.log("data is not find")
            return res.redirect('back')
        }
    }catch(err){
        console.log("somthing went wrong")
        return res.redirect('back')
    }
}

module.exports.UpdateProduct=async(req,res)=>{
    try{
        console.log(req.query.updateId)
        let updatePro=await Product.findById(req.query.updateId)
        let categoryData=await Category.find()
        let SubCategoryData=await SubCategory.find()
        let ExtraCategoryData=await ExtraCategory.find()
        let TypeCategoryData=await Types.find()
        let BrandData=await Brand.find()
        return res.render('Products/UpdateProduct',{updatePro,categoryData,SubCategoryData,ExtraCategoryData,TypeCategoryData,BrandData})
    }catch(err){
        console.log("somthing went wrong")
        return res.redirect('back')
    }
}