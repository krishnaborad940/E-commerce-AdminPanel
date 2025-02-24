const Brand = require("../Models/BrandModel")
const Category = require("../Models/CategoryModel")
const ExtraCategory = require("../Models/ExtraCategoryModel")
const Product = require("../Models/ProductModel")
const SubCategory = require("../Models/subCategoryModel")
const Types = require("../Models/TypesModel")

module.exports.home=async(req,res)=>{
   let Maincategory=await Category.find()
   let sub_category=await SubCategory.find()
   let Extra_category=await ExtraCategory.find()
   let type_category=await Types.find()
   let brand_category=await Brand.find()
   let allProducts=await Product.find()
    return res.render('home',{Maincategory,sub_category,Extra_category,type_category,brand_category,allProducts})

}