const http=require("http");
const server=http.createServer((req,res)=>{
      res.end(`Hello! This is Sarvan Chaurasiya`);
})
server.listen(4000);