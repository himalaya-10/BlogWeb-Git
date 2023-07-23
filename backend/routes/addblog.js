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


// router.get(`/getblog/:pageSize/:i`,async(req,res)=>{
//     const blog=await Blog.find().skip(parseInt((req.params.i-1)*req.params.pageSize)).limit(parseInt(req.params.pageSize));
//     res.json(blog)
// })
router.get(`/getblog/:pageSize/:pageNo`,async(req,res)=>{
    const blog=await Blog.find().skip((req.params.pageNo-1)*req.params.pageSize).limit((req.params.pageSize))
    res.json(blog)
})
module.exports=router