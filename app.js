const express=require('express');
const app=express();
var mongoose = require('mongoose');
mongoose.promise=global.promise;
mongoose.connect("mongodb://localhost:27017/humonics",{useNewUrlParser:true, useUnifiedTopology: true});
 var nameSchema =new mongoose.Schema({
     username:String,
     password:String,
     age:Number,
     location:String,
     dob:Date,
     userId:String

 });

 var bodyParser= require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));

 var User=mongoose.model("User",nameSchema);
 
app.get( "/login" , (req,res)=>{
   
   res.sendFile(__dirname + "/localStorageLogin.html");
   
});
app.get( "/register" , (req,res)=>{
   
    res.sendFile(__dirname + "/localStorageRegis.html");
    
 });
 

 
app.post("/register",(req,res) =>

{
    var myData= new User(req.body);
    myData.save()
            .then(item =>{
                res.send("item save to the datbase");
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
});

app.post("/login",(req,res) =>{
                console.log(req.body);
                 if(req.body.username=="" && req.body.password==""){
                res.send('please fill the details');
                }
                else if(req.body.password==""){
                     res.send('please fill the password');
                }
                 else if(req.body.username==""){
                     res.send('please fill the usernmame');
                }

             else{
                User.find({username:req.body.username,password:req.body.password},function(err,user){
                    if (err){
                        res.status(500).send("internal server error");
                    }else{
                        console.log(user);
                        if(user[0]){
                            res.status(200).send({"userId":user[0]._id});
                        }else{
                            res.status(401).send("fail");
                        }
                    }
           
                    })

}

   });








 app.post("/profile",(req,res)=>{
    var userId=req.body.userId;
    User.find({_id: userId},function(err,results){
            if(err){
            res.send("id not found");
            }
        else{
            console.log(results);
          User.updateOne(
              {_id:userId},
               {$set:{age:req.body.age,
                location:req.body.location,
                dob:req.body.dob}
                },function(err,upResult){
              if(err){
                  res.send("not update");
              }
             
              else{
                   console.log(upResult);
                    res.send("update sucessfull");
              }
          })
        
            }
            }); 
});
    app.post("/delete",(req,res)=>{
    var userId=req.body.userId;
    User.find({_id: userId},function(err,results){
            if(err){
            res.send("server error");
            }
        else{
            console.log(results);
            if(results[0]){
                 User.deleteOne({_id:userId},function(err,delResult) {
              if(err){
                  res.send("deletion fail");
              }
             
              else{
                   console.log(delResult);
                    res.send("delete sucessfull");
              }
          })
        }
           
        }
    })
});
app.post("/show",(req,res)=>{
    User.find({},{_id:1,username:1, age:1},function(err,result) {
              if(err){
                  res.send("server error");
              }
             else{
                   console.log(result);
                    res.send(result);
              }
          })
});
module.exports=app;
