const mongoose=require('mongoose')

const CategorySchema=mongoose.Schema({
    category:{
        type:String,
        require:true
    },
    Status:{
        type:Boolean,
        require:true,
        default:true
    }
},{timestamps:true})




const Category=mongoose.model('Category',CategorySchema)

module.exports=Category;