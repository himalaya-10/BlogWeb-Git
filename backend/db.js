const mongo=require("mongoose")
const mongoUrl='mongodb://localhost:27017'

const mongoconnect=()=>{
    mongo.connect(mongoUrl)
}
module.exports=mongoconnect