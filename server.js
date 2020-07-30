const express = require("express");
const path=require("path");
const bodyparser=require("body-parser");
const mysql= require("mysql");
const dotenv=require("dotenv");

dotenv.config({path:"./process.env"})
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
const db=mysql.createConnection({
  host:process.env.DATABASE_HOST,
  user:process.env.DATABASE_USER,
  password:process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE
});

app.set("view engine","hbs");
const publicDirectory=path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
db.connect((error)=>{
  if(error)
  {
    console.log(error)
  }
else {
  console.log("MYSQL CONNECTED")
}

})
app.use('/',require("./routes/pages"));

app.listen(3000,function(){});
