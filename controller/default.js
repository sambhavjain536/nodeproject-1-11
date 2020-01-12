var express = require("express");
var router = express.Router();

router.use("/",require("../controller/signup"));
router.use("/login",require("../controller/login"));
router.use("/showuser",backedor ,require("../controller/showuser"));
router.use("/userupdate",require("../controller/userupdate"));
router.use("/logout",require("./logout"));


function backedor(req,res,next){
    if(!req.session.user_loged_in){
      res.redirect("/login")
    }
    next();
}

module.exports=router;