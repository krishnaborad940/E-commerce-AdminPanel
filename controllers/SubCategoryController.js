const SubCategory = require("../Models/subCategoryModel")

const Category=require('../Models/CategoryModel')
module.exports.AddSubCategory=async(req,res)=>{
    let categoryData=await Category.find()
    return res.render("subCategory/AddSubCategory",{categoryData})
}

module.exports.viewSubCategory=async(req,res)=>{

    let viewSubCate=await SubCategory.find().populate('categoryId').exec()
    return res.render("subCategory/viewSubCategory",{viewSubCate})
}

module.exports.insertSubCategory=async(req,res)=>{
    console.log(req.body)

    let addsubCate=await SubCategory.create(req.body)
    return res.redirect('back')
}

module.exports.deleteSubCate=async(req,res)=>{
    let deletesubcategory= await SubCategory.findByIdAndDelete(req.query.subId)
    return res.redirect('back')
}