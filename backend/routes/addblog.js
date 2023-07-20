const express=require("express")

const router=express.Router();
const Blog=require("../schema/blog.js")
router.post('/addblog',async(req,res)=>{
    let {title,description,by}=req.body;
    const blog=new Blog({
        title,
        description,
        by

    })
    const savedblog=await blog.save();
    res.json(savedblog)
})

router.get('/getblog',async(req,res)=>{
    const blog=await Blog.find()
    res.json(blog)
})

module.exports=router