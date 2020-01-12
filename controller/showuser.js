var express=require("express");
var router=express.Router();
var user=require("../modal/user")

router.get("/",function(req,res){
    user.find(function(err,result){
        var pagedata={"pagename":"showdata","title":"show user","userdata":result}
        res.render("layout",pagedata);
    })
});


router.post("/insert",function(req,res){
        if(err){
            console.log(err)
        }
        if(result){
            console.log(result)
        }
    });

router.get("/delete/:id", function(req, res){
    console.log("shreya ++++++",req.params.id)

       var id=req.params.id
     user.delete({id:id},function(err, result){
         console.log(result);
         res.redirect('/view/delete');
     });
});

router.get("/edit/:id", function(req, res){
    var id = req.params.id;
    console.log("SSSSSSSSSSSS",id)
    user.findbyid({id:id},function(err, result){
        console.log(result);
        var pagedata={"title":"updateuser","pagename":"userupdate","data":result[0]};
        res.render("layout",pagedata);
    });
});    


module.exports=router;