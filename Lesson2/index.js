const fs=require("fs");


//file data will be overwrite

// fs.writeFile("demo1.txt","my name is irfan ahmed",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("successfull")
//     }
// })


//file data will be add after the previous data

fs.appendFile("demo1.txt",". i am 22 years old",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("successfull")
    }
})

//rename file 

// fs.rename("demo1","demo1.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("successfull")
//     }
// })