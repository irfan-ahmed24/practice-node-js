const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const route=require("./routes/users.route")
const {home,errorPage}=require('./controller/controler')

app.use(bodyParser.urlencoded({extended:"true"}))
app.use(bodyParser.json())

app.get("/",home)
app.use("/users",route)
app.use(errorPage)

module.exports=app;