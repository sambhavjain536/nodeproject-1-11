var express=require("express");
var router=express.Router();
var path=require("path");
var user=require("../modal/user")
router.get("/",function(req,res){
    var pagedata={"pagename":"signup","title":"signup page"};
   res.render("layout",pagedata);
});


router.post("/submitsignup",function(req,res){
    console.log(req.body,"woohoo")
    var file=req.files.image;
    console.log(file.name,"SSSSSSSSSSSSSSSS")
    var filepath=path.resolve("public/image/"+file.name);
    console.log(filepath)
    file.mv(filepath,function(err){
        if(err){
            console.log(err)
        }
    })


    var obj={};
   
    obj.name=req.body.name;
    obj.email=req.body.email;
    obj.password=req.body.password;
    obj.image=file.name;
    console.log(obj)
    user.findwhere({email:req.body.email},function(err,result){

   if(err){
       res.send(err)
   } 
   if(result){
        if(result.length>0){
            res.send("Email Already Exist!")
        }else{

            user.insert(obj,function(err,result){
                if(err){
                    console.log("errrrr",err);
         
                 //  req.body.pagename="showdata";
                 //    req.body.title="show"
                 //    res.render("layout",req.body)       
             }
                if(result){
                    res.redirect('/login');
             }
             });

        }
   }
    
})

});










module.exports=router;