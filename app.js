var express = require("express");
var app = express();
var fileupload = require("express-fileupload");
var session=require("express-session");
var cookie=require("cookie-parser");
app.use(express.static(__dirname+"/public/"));

var bodyparser = require("body-parser");
app.use(bodyparser());
app.use(cookie());
app.use(session({
    secret: 'ziasy',
    saveUninitialized: true,
}));
app.use(fileupload());
app.set("view engine","ejs");
app.use(function(req,res,next){
    res.locals.session=req.session
    next();     
})

app.use(require("./controller/default"))

app.listen(2000,function(){
    console.log("Server Started..!")
});