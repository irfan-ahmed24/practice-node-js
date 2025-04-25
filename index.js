const express=require('express')

const app=require("./app")
const port=2000;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})


