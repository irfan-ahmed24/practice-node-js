const getFruitName=require("random-fruits-name")
const http=require("http")
const myServer=http.createServer((req,res)=>{
    res.end(getFruitName())
})
myServer.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`server is running at http://localhost:3000`)
        console.log("successfull")
    }
})