const mongoose=require('mongoose');

const ExtraCategorySchema=mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
        
    },
    SubCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubCategory',
        required:true
    },
    ExtraCategory:{
        type:String,
        required:true
    },
    Status:{
        type:Boolean,
        require:true,
        default:true
    }
},{timestamps:true})




const ExtraCategory=mongoose.model('ExtraCategory',ExtraCategorySchema)

module.exports=ExtraCategory;