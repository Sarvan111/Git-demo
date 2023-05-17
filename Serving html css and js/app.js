const express =require('express');
const path=require("path");
const app=express();
const adminRoute=require('./routes/admin');
const shopRoute=require('./routes/shop');
const contactRoute=require("./routes/contact");
app.use(express.urlencoded({
extended:true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))
app.use(adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});
app.listen(4000);