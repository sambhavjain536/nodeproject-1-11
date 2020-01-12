var express=require("express");
var router=express.Router();
var user=require("../modal/user")


router.get("/",function(req,res){
    var pagedata={"pagename":"userupdate","title":"userupdate page"};
   res.render("layout",pagedata);
});

router.post("/userupdate",function(req,res){
  console.log(req.body)
    
    var obj={};
   
    obj.name=req.body.name;
    obj.password=req.body.password;
    console.log(obj)
    user.userupdate({id:req.body.id},obj,function(err,result){
        console.log(result,"AAAAAAAA")
    });
    

});

module.exports=router;