var express = require('express')
const cors = require('cors')
const mongoconnect=require("./db")
mongoconnect()

const app=express();
app.use(cors())
const port=8000
app.use(express.json())
app.use('/api',require("./routes/addblog.js"))



app.listen(port,()=>{
    console.log(`listening on port http//:localhost:${port}`)
})