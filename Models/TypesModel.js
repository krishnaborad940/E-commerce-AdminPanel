const mongoose=require('mongoose')

const TypesSchema=mongoose.Schema({
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
TypesCategory:{
    type:String,
    require:true
},
    Status:{
        type:Boolean,
        require:true,
        default:true
    }
},{timestamps:true})




const Types=mongoose.model('Types',TypesSchema)

module.exports=Types;