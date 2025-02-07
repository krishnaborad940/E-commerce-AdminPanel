const Types = require("../Models/TypesModel")
const Category=require('../Models/CategoryModel')
const SubCategory=require('../Models/subCategoryModel')
const ExtraCategory=require('../Models/ExtraCategoryModel')

module.exports.AddTypes=async(req,res)=>{
    let categoryData=await Category.find()
    let SubCategoryData=await SubCategory.find()
    let ExtraCategoryData=await ExtraCategory.find()

    return res.render('Types/AddTypes',{categoryData,SubCategoryData,ExtraCategoryData})
}

module.exports.insertTypesCategory=async(req,res)=>{
    // console.log(req.body)
    try{
        let typeAdd=await Types.create(req.body)
        return res.redirect('back')
    }catch(err){
        console.log("data not added")
        return res.redirect('back')
    }
}

module.exports.ViewTypes=async(req,res)=>{
    try{

let viewTypedata=await Types.find().populate('categoryId').populate('SubCategoryId').populate('ExtraCategoryId').exec()
return res.render('Types/ViewTypes',{viewTypedata})

    }catch(err){
        console.log("data Not Found")
        return res.redirect('back')
    }
}

module.exports.deleteTypeCategory=async(req,res)=>{
    let deleteExtra=await Types.findByIdAndDelete(req.query.TypeId)
    return res.redirect('back')
}