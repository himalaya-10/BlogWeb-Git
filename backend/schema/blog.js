const mongo=require('mongoose')
const {Schema}=mongo

const blogschema=new Schema({
    
        title:{type:String},
        description:{type:String},
        by:{type:String},
        date:{
                type:Date,
                default:Date.now
            }
    
})

const blog=mongo.model('Blog',blogschema)
module.exports=blog;