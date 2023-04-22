const http=require("http");
const server=http.createServer((req,res)=>{
      const path=req.url;
      if(path==="/")
      {
      res.end("welcome to Node js project");
      }
      else if(path==="/home")
      {
            res.end("Welcome home");
      }
      else if(path==="/about")
      {
            res.end("Welcome to About us page");
      }
      else if(path==="/node")
      {
            res.end("Welcome to my Node js Project");
      }
      else
      {
        res.end("Page not Found");
      }
})
server.listen(4000,"127.0.0.1",()=>{
console.log("Listening to request on port 4000")
});