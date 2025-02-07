const mongoose=require('mongoose')

const BrandSchema=mongoose.Schema({
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
brand:{
    type:String,
    required:true
},
    Status:{
        type:Boolean,
        require:true,
        default:true
    }
},{timestamps:true})




const Brand=mongoose.model('Brand',BrandSchema)

module.exports=Brand;