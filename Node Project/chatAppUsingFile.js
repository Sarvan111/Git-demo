const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
const url=req.url;
const method=req.method;
      if(url==='/')
        {
         fs.readFile("message.txt",{encoding:"utf8"},(err,data)=>{
         err== true ? console.log(err):console.log(data);
         res.write("<html>");
         res.write("<head><title>Enter Message</title><head>");
         res.write(`<body>${data}</body>`)
         res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button>Send</button></form></body>");
         res.write("</html>");
         return res.end();
         //returning response from anonymous function
         })
        }
       else if (url==='/message' && method==='POST')
        {
        const arr=[];
        req.on('data',chunk=>{
        arr.push(chunk);
        })
         req.on('end',()=>{
        //adding chunks of data and then converting into string
        const parsedArray=Buffer.concat(arr).toString();
        const message=parsedArray.split('=')[1];
        fs.writeFile('message.txt',message,(err)=>{
        if(err)
        {
        console.log(err);
        }
        res.statusCode=302;
        //redirecting to same page
        res.setHeader("Location","/");
        return res.end();
        })
       })
      }
      else
      {
      res.setHeader("Content-Type","text/html");
      res.write("<html>");
      res.write("<head><title>First Page</title><head>");
      res.write("<body><h1>Hello From My Node js Server!</h1></body>");
      res.write("</html>");
      }
    })
    server.listen(3000);