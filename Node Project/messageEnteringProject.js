const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
const url=req.url;
const method=req.method;
      if(url==='/')
        {
         res.write(`<html>`);
         res.write(`<head><title>Enter Message</title><head>`);
         res.write(`<body><form action="/message" method="POST"><input type='text' name='message'><button>Send</button></form></body>`);
         res.write(`</html>`);
         return res.end();
        }
        if (url==='/message' && method==='POST')
       {
        const arr=[];
        req.on('data',chunk=>{
        arr.push(chunk);
        })
        return req.on('end',()=>{
        const parsedArray=Buffer.concat(arr).toString();
        const message=parsedArray.split('=')[1];
        fs.writeFile('message.txt',message,(err)=>{
        res.statusCode=302;
        res.setHeader("Location","/");
        return res.end();
        })
       })
      }
      res.setHeader("Content-Type","text/html");
      res.write("<html>");
      res.write("<head><title>First Page</title><head>");
      res.write("<body><h1>Hello From My Node js Server!</h1></body>");
      res.write("</html>");
    })
    server.listen(3000);