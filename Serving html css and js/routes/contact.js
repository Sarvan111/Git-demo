const express =require('express');
const path=require("path")
const rootDirectory=require("../helper/path");
const router=express.Router();
router.get('/contactUs',(req,res,next)=>{
res.sendFile(path.join(rootDirectory,"views","contact.html"));
});
router.post('/success',(req,res,next)=>{
console.log(req.body);
res.sendFile(path.join(rootDirectory,"views","confirmation.html"));
});
module.exports=router;