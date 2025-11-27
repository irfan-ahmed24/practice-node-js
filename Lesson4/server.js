//create server 

const user=[{
    userName:"irfan ahmed",
    email :"irfanahmed99989@gmailcom"
}]

const http=require("http");
const { json } = require("stream/consumers");

const myServer=http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user))
})

myServer.listen(8080,()=>{
    console.log(`server is running at http://localhost:8080`)
})