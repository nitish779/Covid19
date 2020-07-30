const express=require("express");
const router = express.Router();
const mysql= require("mysql");

const db=mysql.createConnection({
  host:process.env.DATABASE_HOST,
  user:process.env.DATABASE_USER,
  password:process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE
});
db.connect((error)=>{
  if(error)
  {
    console.log(error)
  }
else {
  console.log("MYSQL CONNECTED")
}

})
router.get("/",(req,res)=>{
  res.render("index");
});
router.post("/",(req,res)=>{
  console.log(req.body);
})
module.exports=router;
