const SubCategory = require("../Models/subCategoryModel")

const Category=require('../Models/CategoryModel')
module.exports.AddSubCategory=async(req,res)=>{
    let categoryData=await Category.find()
    return res.render("subCategory/AddSubCategory",{categoryData})
}

module.exports.viewSubCategory=async(req,res)=>{

    let viewSubCate=await SubCategory.find({categoryId:req.body.categoryId})
    var optiondata=`<option>--select--</option>`
    categoryData.map((v,i)=>{ 
        optiondata+=`<option value="${v.id}">${v.category}</option>`
    })
    return res.json(optiondata)
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