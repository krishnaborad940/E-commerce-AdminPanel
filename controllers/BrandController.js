const Types = require("../Models/TypesModel")
const Category=require('../Models/CategoryModel')
const SubCategory=require('../Models/subCategoryModel')
const ExtraCategory=require('../Models/ExtraCategoryModel')
const Brand=require('../Models/BrandModel')

module.exports.AddTypes=async(req,res)=>{
    let categoryData=await Category.find()
    let SubCategoryData=await SubCategory.find()
    let ExtraCategoryData=await ExtraCategory.find()
    let TypeCategoryData=await Types.find()


    return res.render('Brand/AddBrand',{TypeCategoryData,categoryData,SubCategoryData,ExtraCategoryData})
}

module.exports.insertBrand=async(req,res)=>{
    // console.log(req.body)
    try{
        let BrandAdd=await Brand.create(req.body)
        return res.redirect('back')
    }catch(err){
        console.log("data not added")
        return res.redirect('back')
    }
}

module.exports.ViewBrand=async(req,res)=>{
    try{

let viewBranddata=await Brand.find().populate('categoryId').populate('SubCategoryId').populate('ExtraCategoryId').populate('TypesCategoryId').exec()
return res.render('Brand/ViewBrand',{viewBranddata})

    }catch(err){
        console.log("data Not Found")
        return res.redirect('back')
    }
}

 module.exports.deleteBrandData=async(req,res)=>{
let deleteBrand=await Brand.findByIdAndDelete(req.query.BrandId)
     return res.redirect('back')
 }