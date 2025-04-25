const express=require('express');
const route=express.Router()
const {AllUsers,CreateUser,UpdateUser,deleteUser}=require("./../controller/controler.js")

route.get("/",AllUsers)
route.post("/",CreateUser)
route.put("/:id",UpdateUser)
route.delete("/:id",deleteUser)



module.exports=route;