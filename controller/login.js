var express=require("express");
var router=express.Router();
var user=require("../modal/user")
router.get("/",function(req,res){
    var pagedata={"pagename":"login","title":"login page"};
   res.render("layout",pagedata);
});


router.post("/submitlogin",function(req,res){
    console.log(req.body,"rrrrrr")


    var obj={};
    obj.email=req.body.email;
    obj.password=req.body.password;
    user.findwhere(obj,function(err,result){
     if(err){
         console.log(err)
     }else{
         console.log(result,"SHREYAAAA")
         if(result.length>0){
             req.session.userid=result[0].id;
             req.session.name=result[0].name;
             req.session.user_loged_in=true;
            

             res.redirect("/showuser")
         }else{
             res.send("user email or password incorrect")
         }
     }

    });


});










module.exports=router;