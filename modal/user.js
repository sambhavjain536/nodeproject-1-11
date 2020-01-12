var con = require("../config/connect");

module.exports.insert=function(obj,cb){
    con.getConnection(function(err){
        if(err){
            console.log(err,"connection not stable")
        }
        var que= "INSERT INTO user(name,email,password) VALUES('"+obj.name+"','"+obj.email+"','"+obj.password+"')";
        con.query(que,cb)
    });
}

module.exports.findwhere= function(obj,cb){
    con.getConnection(function(err){
        if(err){
            console.log(err,"connection not stable")
        }
        var que ="select * from user where email='"+obj.email+"' AND password='"+obj.password+"'";
       console.log(que)
        con.query(que,cb)
    });
}


module.exports.find= function(cb){
    con.getConnection(function(err){
        if(err){
            console.log(err,"connection not stable")
        }
        var que ="select * from user";
       console.log(que)
        con.query(que,cb)
    });
}

module.exports.findbyid= function(obj,cb){
    con.getConnection(function(err){
        if(err){
            console.log(err,"connection not stable")
        }
        var que ="select * from user where id="+obj.id+"";
       console.log(que)
        con.query(que,cb)
    });
}



module.exports.delete=function(obj,cb){
    con.getConnection(function(err){
        if(err){
            console.log(err,"connection not stable!++")
        }
        var que="delete from user where id="+obj.id+"";
        con.query(que,cb)
    });
}

module.exports.userupdate=function(where,obj,cb){
    con.getConnection(function(err){
        if(err){
            console.log(err,"connection not stable!!!!!!")
        }
        var que= "UPDATE user SET name='"+obj.name+"' , password='"+obj.password+"' where id="+where.id+"";
        console.log(que,"SSSSSSSSSSSS")
        con.query(que,cb)
    });
}