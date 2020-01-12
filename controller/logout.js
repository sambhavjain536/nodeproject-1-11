var express=require("express");
var router=express.Router();


router.get("/",function(req,res){
    req.session.destroy();
    console.log("ssssssssssssssss");
    console.log(req.session)
    res.redirect("/login")

});


module.exports=router;