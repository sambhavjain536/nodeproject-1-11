var mysql = require('mysql');

module.exports=mysql.createPool({
host:"localhost",
user:"root",
password:"",
database:"myproject2"

});