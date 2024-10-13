const express = require("express")
const cors = require('cors')

const app=express()
app.use(cors()) //request
app.use(express.json()) //axios-post
app.use(express.urlencoded({extended:true})) // form-action

var user = "nandhini"
var pass = 123

app.get("/Login",function(req,res){
   
    if(req.query.userName == user && req.query.password == pass){
        res.send(true)
    }else{
        res.send(false)
    }
})

app.post("/Login",function(req,res){

    if(req.body.userName == user && req.body.password == pass){
        res.send(true)
    }else{
        res.send(false)
    }
})



app.listen(3500,function(){
    console.log("Server Started .....")
})