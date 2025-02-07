const mongoose=require('mongoose')

const SubCategorySchema=mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    Status:{
        type:Boolean,
        require:true,
        default:true
    }
},{timestamps:true})




const SubCategory=mongoose.model('SubCategory',SubCategorySchema)

module.exports=SubCategory;