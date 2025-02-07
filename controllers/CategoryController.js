const Category = require("../Models/CategoryModel")

module.exports.AddCategory=async(req,res)=>{
    return res.render('category/AddCategory')
}

module.exports.insertCategory=async(req,res)=>{
    // console.log(req.body)

    let addCate=await Category.create(req.body)
    return res.redirect('back')
}

module.exports.ViewCategory=async(req,res)=>{
    // console.log(req.body)

    let Viewcat=await Category.find()
    return res.render('category/ViewCategory',{Viewcat})
}

module.exports.deletecate=async(req,res)=>{
    let delecat=await Category.findByIdAndDelete(req.query.id)
    return res.redirect('back')
}


module.exports.ActiveStatus=async(req,res)=>{

    let AdminSatus=await Category.findByIdAndUpdate(req.query.catId,{"Status":false})
    return res.redirect('back')
}

module.exports.DeActiveStatus=async(req,res)=>{
    let AdminSatus=await Category.findByIdAndUpdate(req.query.catId,{"Status":true})
    return res.redirect('back')
}


