const express =require('express');
const app=express();
const loginRoute=require('./routes/login');
const messageRoute=require('./routes/message');
app.use(express.urlencoded({
extended:true
}));
app.use(express.json());
app.use(loginRoute);
app.use(messageRoute);
app.use((req,res,next)=>{
res.status(404).send("<h1>Page not found</h1>");
});
app.listen(3000);