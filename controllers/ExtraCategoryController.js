const Category = require("../Models/CategoryModel")
const ExtraCategory = require("../Models/ExtraCategoryModel");
const SubCategory = require("../Models/subCategoryModel");

module.exports.AddExtraCategory=async(req,res)=>{
    let categoryData=await Category.find();
    let subcategoryData=await SubCategory.find();

    // console.log(subcategoryData)

    return res.render("ExtraCategory/AddExtraCategory",{categoryData,subcategoryData})
}

module.exports.viewExtraCategory=async(req,res)=>{

    let viewExtraCate=await ExtraCategory.find().populate('categoryId').
        populate('SubCategoryId').exec();

    return res.render("ExtraCategory/viewExtraCategory",{viewExtraCate})
}

module.exports.insertExtraCategory=async(req,res)=>{
    console.log(req.body)

    let addExtracate=await ExtraCategory.create(req.body)
    return res.redirect('back')
}

module.exports.deleteExtraCategory=async(req,res)=>{
    let deleteExtra=await ExtraCategory.findByIdAndDelete(req.query.extraId)
    return res.redirect('back')
}