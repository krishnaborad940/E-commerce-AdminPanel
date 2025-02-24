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

    let serach='';
if(req.query.productSerach){
    serach=req.query.productSerach
}

let page=0;
let per_page=3;
if(req.query.page){
    page=req.query.page;
}


    let viewProductData=await Product.find({
        $or:[
            {title:{$regex:serach}},
            {categoryData:{$regex:serach,$options: "i"}},
            {subCategory:{$regex:serach}},
            {ExtraCategory:{$regex:serach}},
            {TypesCategory:{$regex:serach}},
            {brand:{$regex:serach}},
            {price:{$regex:serach}},
        ]
    }).skip(page*per_page).limit(per_page).populate('categoryId').
        populate('SubCategoryId').populate('ExtraCategoryId').populate('TypesCategoryId').populate('BrandCategoryId').exec()

        let viewProductDataRecord=await Product.find({
            $or:[
                {title:{$regex:serach}},
                {categoryData:{$regex:serach,$options: "i"}},
                {subCategory:{$regex:serach}},
                {ExtraCategory:{$regex:serach}},
                {TypesCategory:{$regex:serach}},
                {brand:{$regex:serach}},
                {price:{$regex:serach}},
            ]
        }).countDocuments();
    
        let totalData=Math.ceil(viewProductDataRecord/per_page)

    return res.render("Products/ViewProduct",{viewProductData,serach,page,totalData})
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
    let updateId=req.params.id;
        let updatePro=await Product.findById(updateId)
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

module.exports.Editroducts=async(req,res)=>{
    try{
// console.log(req.body)
// console.log(req.file)

if(req.file){
    let singledata=await Product.findById(req.body.editid);
    // console.log(singledata)
    if(singledata){
        try{
            let oldImg= path.join(__dirname,'..',singledata.Image)
            fs.unlinkSync(oldImg);
        }catch(err){
            console.log("image is not found")
        }
        let newImg=await Product.ImgPath+'/'+req.file.filename
        req.body.Image=newImg;
        let updateData=await Product.findByIdAndUpdate(req.body.editid,req.body)
        console.log(updateData)
        if(updateData){
            console.log("data updated succesfully")
            return res.redirect('/Products/ViewProduct')
        }else{
            console.log("data not updated")
            return res.redirect('back')
        }
       }else{
        console.log("data not found")
        return res.redirect('back')
       }
}
else{
    let singledata=await Product.findById(req.body.editid);
    req.body.Image=singledata.Image;
    let updateData=await Product.findByIdAndUpdate(req.body.editid,req.body)
    if(updateData){
        console.log("data updated succesfully")
        return res.redirect('/Products/ViewProduct')
    }else{
        console.log("data not updated")
        return res.redirect('back')
    }

}
    }catch(err){
        console.log("somthing went wrong")
        return res.redirect('back')
    }
}