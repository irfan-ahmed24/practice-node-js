

const path=require('path')
let users=require("./../model/data")
const {v4:uuidv4}=require("uuid")
const { json } = require('body-parser')



const home=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"))
}

const AllUsers=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/user.html"))
}

const CreateUser=(req,res)=>{
    const newid=uuidv4();
    const {name,email}=req.body;
    const newUser={
        id:newid,
        name:name,
        email:email
    }
    users.push(newUser)
    res.status(201).json(users)
 }

 const UpdateUser=(req,res)=>{
    const selectID=req.params.id;
    const {name,email}=req.body;
    users.filter((user)=>user.id==selectID).map((select)=>{
        select.name=name,
        select.email=email
    })
    res.status(202).json(users)
 }

 const deleteUser=(req,res)=>{
    const selectID=req.params.id;
    users=users.filter((user)=>user.id!=selectID)
    res.status(202).json(users)
 }


const errorPage=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/Error.html"))
}

module.exports={home,errorPage,AllUsers,CreateUser,UpdateUser,deleteUser}